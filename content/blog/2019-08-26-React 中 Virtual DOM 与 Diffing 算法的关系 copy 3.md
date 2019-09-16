---
author: Alex
date: 2019-08-26
layout: post
title: React 中 Virtual DOM 与 Diffing 算法的关系
description: Virtual DOM 与 Diffing 算法的关系
keywords: [Virtual DOM, Diffing 算法, Virtual DOM 与 Diff 算法]
tags:
  - 前端
  - 记录
---

## 前言

这篇文章是基于 React 官方文档对于 Virtual DOM 的理念和 Diffing 算法的策略的整合。

## Virtual DOM 是一种编程理念

Virtual DOM 是一种编程理念。UI 信息被特定语言描述并保存到内存中，再通过特定的库，例如 ReactDOM 与真实的 DOM 同步信息。这一过程成为 `协调 (Reconciliation)`。

### 与之对应的数据结构

Virtual DOM 反映到实际的数据结构上，就是每一个 React 的 fiber node

```jsx
// UI 组件描述
const Span = (props) => <span></span>

// 实际的 Fiber node structure
{
  stateNode: new HTMLSpanElement,
  type: "span",
  alternate: null,
  key: null,
  updateQueue: null,
  memoizedState: null,
  pendingProps: {},
  memoizedProps: {},
  tag: 1,
  effectTag: 0,
  nextEffect: null
}
```

这一抽离结构有点像 React 版本的 AST 抽象语法树。

## Diffing 算法

### 问题

在 Virtual DOM -> Real DOM 之间的转换过程中，需要高效率的算法来支撑。由于某个时刻调用 React render() 方法生成的 React 元素组成的树，与下一次 state 或 props 变化时调用同一个 render 返回的树是不一样的，React 需要根据这两个不同的树来决定如何高效地让最新的 Virtual DOM 反应到真实 DOM 中。

### 解决方式

Diffing 算法就是解决如何更有效率地更新 UI 的关键。

React 采取了一个复杂度为 O(n) 的比较策略，这个策略有两个假设

1. 两个不同类型的元素会产出不同的树
2. 开发者可以通过 key prop 来保持元素的稳定

## Diffing 策略

### 1. 对比根节点的元素

如果为不同类型，React 将会把原有的树拆卸并重新建立新的树。例如 `<div>` -> `<span>`。

1. 当这颗树被拆卸后，对应的 DOM 节点也被销毁，组件实例回调用 willUnmount 方法。
2. 当建立新的树的时候，对应的 DOM 将被插入到 DOM 中，并调用 didMount 方法。

在根节点以下的组件也会被卸载，它们的状态会被销毁。例如：

```jsx
<div>
  <Counter />
</div>

<span>
  <Counter />
</span>
```

### 2. 对比同一类型的元素

当对比两个同类型的 React 元素时，React 会保留 DOM 节点，仅对比以及更新有变化的属性

```html
<div className="before" title="stuff" />

<div className="after" title="stuff" />
```

通过对比两个元素，React 得知 `className` 变化，所以只需要更新 DOM 对应元素上的 `class`。

当处理完当前节点时，React 将会对子节点进行递归。

### 3. 对比同类型的组件元素

当一个 React 组件需要更新时（例如 `props` 有变化），组件实例保持不变，实例中的 state 能在不同渲染时保持一致。React 将更新该组件实例的 `props` 以保持与最新的元素的一致。并调用 __该实例的原型__ 上的函数 `getDerivedStateFromProps`（官方文档是 componentWillReceiveProps 和 componentWillUpdate，但这将会被弃用）。

下一步是调用该实例的 `render` 方法，diffing 算法将在之前的结果和最新的结果中进行递归。

### 4. 对子节点进行递归

#### 问题

在默认条件下，当递归 DOM 节点的子元素时，React 会同时遍历两个子元素的列表，当发现两个子元素有差异时，将生成一个「变种（mutation）」。

例如在子元素列表末尾新增元素时，更变开销比较小。比如：

```js
// before
<ul>
  <li>first</li>
  <li>second</li>
</ul>

// after
<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```

React 会匹配两个 `<li>first</li>` 对应的树、两个 `<li>second</li>` 对应的树，然后插入 `<li>third</li>` 树。

但如果就这样简单实现的话，那么在列表头部插入会很影响性能，更变的开销会比较大。比如：

```html
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```

React 会认为每个子元素都「改变(mutate)」了，而不会认为可以保持 `<li>Duke</li>` 和 `<li>Villanova</li>` 子树不变，从而导致重新渲染。这种情况下的低效可能会带来性能问题。

#### 解决策略 Keys

为了解决以上问题，React 支持 key 属性。当子传入 key 到子元素时，React 通过 key 来匹配比较`原有树上的子元素`以及`最新树上的子元素`的差异。以下例子在新增 key 之后使得之前的低效转换变得高效：

```js
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

现在 React 知道只有带着 '2014' key 的元素是新元素，带着 '2015' 以及 '2016' key 的元素仅仅移动了位置。

所以一般在开发的时候最好使用一个有唯一属性的 id 来作为 key

```js
<li key={item.id}>{item.name}</li>
```

在开发者自己确定`数组数据不会轻易改变`的情况下才可以用数组下表来作为 key。

## 权衡（Tradeoffs）

上述只是 协调算法（reconciliation algorithm）的实现细节而已。React 可以响应每一次 action 后重新渲染整个应用，最终结果也会是一样的。

需要明确知道的是，在当`前上下文（this context）`中`重新渲染（rerender）`意味着会调用所有的 `component` 的 `render()`，但并不意味着 React 会`卸载（unmount）`或`重载（remount）`它们。它（协调算法）只会用上述规则在其过程中找出不同。

## 参考

- [Virtual DOM 及内核][reactVirtualDOM]
- [React 协调过程][reactDiffing]
- [Fiber Node Description][fiberNodeDesc]

[reactVirtualDOM]: https://zh-hans.reactjs.org/docs/faq-internals.html
[reactDiffing]: https://reactjs.org/docs/reconciliation.html
[fiberNodeDesc]: https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/
