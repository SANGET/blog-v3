---
author: Alex
date: 2019-07-16
layout: post
title: 如何向 ArrayBuffer 写入 Uint64 数据
description: 先从 JS 的 Number 说起...
keywords: 
  - ArrayBuffer Uint64
  - Uint64 js
  - protobuf uint64
# permalink: /protobufjs-uint64
tags: 
  - 技术
  - 前端
---

## JS 的 Number

JS 的 Number 的实现是基于 IEEE 754 的浮点数标准（Standard for Floating-Point Arithmetic），整数部分的精度只有 「-2^52 ~ 2^52 - 1」，可以通过 `Number.MAX_SAFE_INTEGER` 查看 JS 的安全运算范围。

由于这个原因，在一些需要更精确运算的应用场景中，JS Number 精度就不够了，例如需要把 64 位整数（Int64）写入到 buffer 数组中。

那怎么解决 JS 的精度问题？

--------------

## 使用 BigInt

在最新的 ECMAScript 标准中，已经将 BigInt 定义为 JS 的原始类型（Primitive value）。

>打开浏览器的控制台输入

```js
BigInt(0)
// 输出 0n
```

在数字后面加 `n` 就是 BigInt 类型。

有 `BigInt` API 可以轻松向 buffer 写入 64 位的数据

```js
const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);

const offset = 0;
const littleEndian = true;

view.setBigUint64(offset, BigInt('123456789012412421521'), littleEndian);

console.log(view) // 刚好用 64 字节写满 8 位的 buffer
```

但是事情并没有那么一帆风顺，目前只有 Chrome 和 Firefox 等主流浏览器实现了，Safari 系列暂不支持，需要用另外的方法兼容。

如何兼容不支持 `BigInt` 的浏览器？

--------------

## 使用 Chrome 团队的 JSBI

- [JSBI GitHub](https://github.com/GoogleChromeLabs/jsbi#readme)

这是根据 ECMAScript 给出对于 BigInt 的定义的 JS polyfill 实现，完美实现 BigInt

```js
import JSBI from 'jsbi'

// 官方例子，用 JS 最大长度 + 2
const max = JSBI.BigInt(Number.MAX_SAFE_INTEGER);
console.log(String(max));
// → '9007199254740991'
const other = JSBI.BigInt('2');
const result = JSBI.add(max, other);
console.log(String(result));
```

恨简单的使用方式，完美兼容。

但是这又如何在 buffer 中读写 64 位数据？

--------------

通过修改 DataView 的原型，实现写入 Int64 到 buffer 操作的浏览器兼容方案：

> 以下例子为 `TS`

```ts
import JSBI from 'jsbi';

declare global {
  interface DataView {
    setUint64: Function;
    getUint64: Function;
  }
}

DataView.prototype.setUint64 = function setUint64(
  byteOffset: number, value, littleEndian: boolean
) {
  if (typeof value === 'bigint' && typeof this.setBigUint64 !== 'undefined') {
    // the original native implementation for bigint
    this.setBigUint64(byteOffset, value, littleEndian);
  } else if (value.constructor === JSBI && typeof value.sign === 'bigint' && typeof this.setBigUint64 !== 'undefined') {
    // JSBI wrapping a native bigint
    this.setBigUint64(byteOffset, value.sign, littleEndian);
  } else if (value.constructor === JSBI) {
    // JSBI polyfill implementation
    const lowWord = value[0];
    let highWord = 0;
    if (value.length >= 2) {
      highWord = value[1];
    }
    this.setUint32(byteOffset + (littleEndian ? 0 : 4), lowWord, littleEndian);
    this.setUint32(byteOffset + (littleEndian ? 4 : 0), highWord, littleEndian);
  } else {
    throw TypeError('Value needs to be BigInt ot JSBI');
  }
};
DataView.prototype.getUint64 = function getUint64(byteOffset, littleEndian) {
  if (typeof this.getBigUint64 !== 'undefined') {
    return this.getBigUint64(byteOffset, littleEndian);
  }
  let lowWord = 0;
  let highWord = 0;
  lowWord = this.getUint32(byteOffset + (littleEndian ? 0 : 4), littleEndian);
  highWord = this.getUint32(byteOffset + (littleEndian ? 4 : 0), littleEndian);
  const result = new JSBI(2, false);
  result.__setDigit(0, lowWord);
  result.__setDigit(1, highWord);
  return result;
};
```

使用方式与 BigInt 类似

```ts
import JSBI from 'jsbi';

const buffer = new ArrayBuffer(8);
const view = new DataView(buffer);

const offset = 0;
const littleEndian = true;

// 使用 polyfill 的 api
view.setUint64(offset, JSBI.BigInt('123456789012412421521'), littleEndian);

console.log(view) // 得出的结果应该与原生方法保持一致的。
```

## 参考

可以参考 [`elk-chat`](https://github.com/elk-chat/elk_web/blob/master/packages/sdk/bigint-buffer.ts) IM 客户端的实现
