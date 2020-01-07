---
author: Alex
date: 2019-12-20
layout: post
title: 如何列举一个 set 的所有 subset（power set）
description: 之前遇到一个问题：如何列举一个 set 的所有 subset（power set），后来找了答案发现我的思路错了。
keywords: 
  - powerset
  - subset
  - algorithms
tags:
  - 记录
  - 翻译
---

> 参考：https://coderbyte.com/algorithm/print-all-subsets-given-set

### Why

之前遇到一个问题：如何列举一个 set 的所有 subset（power set），后来找了答案发现我的思路错了。这也意识到我的算法基础不够扎实。

### power set

> In mathematics, the power set (or powerset) of any set S is the set of all subsets of S, including the empty set and S itself, variously denoted as P(S), 𝒫(S), ℘(S) (using the "Weierstrass p"), P(S), ℙ(S), or, identifying the powerset of S with the set of all functions from S to a given set of two elements, 2S. In axiomatic set theory (as developed, for example, in the ZFC axioms), the existence of the power set of any set is postulated by the axiom of power set.

在数学上，集合 S 的所有的子集的集合，包括空和 S 本身的集合叫 power set。

### 问题

用一个填充了数字的数组代表一个集合（set），且该数组包含的元素是唯一的。目标是要列举出该集合（set）中所有可能的子集（subset），也就是 power set，例如

```js
let inputSet = [1, 2, 3]
let powerSet = [[], [1], [2], [3], [1, 2], [2, 3], [1, 3], [1, 2, 3]]
```

`powerSet` 包含了 `inputSet` 中所有的数字的可能集合，同时也包含空数组和 `inputSet` 本身。

-------------

### 算法

<!-- 本质上这是一个组合问题，先把所有组合的可能列出出来，N 代表数组的长度：

C(N, 0) + C(N, 1) + C(N, 2) + ... + C(N, N) -->

长度为 N 的 set 有 2<sup>N</sup> 种可能集合，因为每一个元素有两种情况：在或不在 set 之中。我们对 N 个元素进行运算，得到 `2 * 2 * 2 ...` = 2<sup>N</sup>。

所以：

1. 遍历 0 ~ 2<sup>N</sup>
2. 对于每一个数字，获取该数字的二进制表示，例如 3 = 011
3. 从一个二进制表示中确定是否要包含该数字，例如 011 = [exclude, include, include]

### 例子

```js
let inputSet = [1, 2, 3]
```

0 到 2<sup>N</sup> 的二进制表示为：

```js
0 = 000
1 = 001
2 = 010
3 = 011
4 = 100
5 = 101
6 = 110
7 = 111
```

现在对于每一个二进制数，我们可以确定输入集 [1, 2, 3] 中要包含那些当前 set 中的哪些数字了，然后将该数字加入到 powerset 中：

```js
000 = [exclude, exclude, exclude] = []
001 = [exclude, exclude, include] = [3]
010 = [exclude, include, exclude] = [2]
011 = [exclude, include, include] = [2, 3]
100 = [include, exclude, exclude] = [1]
101 = [include, exclude, include] = [1, 3]
110 = [include, include, exclude] = [1, 2]
111 = [include, include, include] = [1, 2, 3]
```

所有可能集合都列举出来了。

### 代码实现

```js
function powerSet(arr) {
  // the final power set
  var powers = [];

  // the total number of sets that the power set will contain
  var total = Math.pow(2, arr.length);

  // loop through each value from 0 to 2^n
  for (var i = 0; i < total; i++) {
    // our set that we add to the power set
    var tempSet = [];

    // convert the integer to binary
    var num = i.toString(2);

    // pad the binary number so 1 becomes 001 for example
    while (num.length < arr.length) { num = '0' + num; }

    // build the set that matches the 1's in the binary number
    for (var b = 0; b < num.length; b++) {
      if (num[b] === '1') { tempSet.push(arr[b]); }
    }
    // add this set to the final power set
    powers.push(tempSet);
  }
  
  return powers;
}
```

### 时间复杂度

此算法的时间复杂度为 O(2<sup>N</sup>)，比较慢，因为一个包含 N 个元素的输入有 2<sup>N</sup> 种可能集合，该算法必须执行许多步骤才能计算所有集合。
