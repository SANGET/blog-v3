---
author: Alex
date: 2020-05-08
layout: post
title: react 带来了什么
# description: 
keywords: 
  - react
tags:
  - 观点
  - 技术
---

在做技术选型的时候，面对不同技术背景的团队成员，需要提出针对提倡的技术提供有说服力的理由。这里就谈谈为什么选择 react。

选择 react 有以下几个点：

### 1. 纯粹的 js 编程思维开发

react 带来的是以纯粹 js 开发 component 的思维方式。

例如只需要熟悉 js 语法，便可以完成任意任务，可以通过表达式将 component 复制给变量，可以用运算符操作 component 的表现方式，例如三元运算符做组件的显示状态切换。

> react 以纯粹的 js 编程思维来编写 component，可以将组件赋值变量，运用表达式操作组件

```js
class A extends Component {
  render() {
    const { isShow } = this.state;
    const icon = (
      <Icon />
    )

    return isShow ? (
      <div />
    ) : (
      <div style={{
        display: 'none'
      }} />
    );
  }
}

<A />
```

拿其他的框架作为对比，例如 angular、vue 等，由框架实现模版解析，自定义模版表达式，所以在程序开发的时候会切换到框架提供的语境来思考问题，这是 react 与 angular、vue 最大的不同。

这里以 vue 为例：

```html
<div id="app">
  {{ message }}
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

react 是激进的，将一切 js 化，angular 和 vue 是渐进的，增强原来的 html+css+js

### 2. 单向数据流

react 是以「单向数据流」的思想为基础而开发的

就是说 react 只有一种改变数据的方式，并没有其他选择。单向数据流的好处便是数据的改变可预测，极大减少程序运行中的意外情况。

angular、vue 都支持双向数据绑定，这是很便捷的，这样意味着开发人员可以很轻松、愉快的更改程序运行中的数据，这样导致的问题便是数据难以跟踪，好处是开发方便简单。

### 3. 数据与视图渲染分离

这方面 react 做的很好，因为已经有很成熟的 react-dom 和 react-native，还有 for windows ｜ mac 的。

----

综上所述，react 带来的更多的是开发思维，基于传统 web 前端开发，更加激进。也许因为这一开发思维，让更多的人使用 react、参与到 react 生态当中，这是 react 生态如此丰富的原因之一。
