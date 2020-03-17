---
author: Alex
date: 2018-10-23
layout: post
title: JS 的箭头函数
tags: [技术]
---

### js 的函数

我们知道普通的函数写法会有 this 作用域，也可以作为构造函数来 new 一个实例，

```js
function funcName(name) {
  this.name = name;
}
const func = new funcName('alex');
console.log(func.name) // -> alex

// 或者用于 class 的继承
class C extends funcName {
  speak() {
    console.log(this.name)
  }
}
const cEntity = new C('bee');
console.log(cEntity.name) // -> bee
```