---
author: Alex
date: 2019-03-24
layout: post
title: 如何实现 React Table 固定列、固定表头
description: 可应用于生产的 React Table 实现
photos: https://cdn.jsdelivr.net/gh/SANGET/blog-v2@master/source/assets/images/other/react-table.png
# permalink: /react-table
keywords: React Table, Table 固定列, Table 固定表头
tags: 
  - 技术
  - 前端
  - React
---

> 前段时间在研究并实现了如何实现表格的固定列（fixed column）功能，这里记录了思路和细节
> 表格控件比较复杂，应用场景也很多，需要各种数据展示、统计、操作等特性

先看效果

<escape>
  <video width="100%" controls>
    <source src="https://cdn.jsdelivr.net/gh/SANGET/blog-v2@master/source/assets/video/react-table-demo.mov" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</escape>

- live demo uke-dashboard [https://admin.thinkmore.xyz/](https://admin.thinkmore.xyz/) ( 用户名 admin, 密码 123 ). 介绍一下 uke-dashboard 是一套前后端分离模式的管理后台前端框架，已经经过了实际项目的验证，快速应对项目需求。
- [Ukelli-UI Table 的文档][ukelli-table]，此 Table 已经在 ukelli-ui 中实现，还有更多表格功能

--------------

## 期望效果

1. 固定表头
2. 左右各有一个固定的列
3. 自动计算表格 cell 的宽度和高度，并且不能超过一定的长度，并且表头需要和表体同步宽度，不需要在配置中传入 UI 相关的宽度信息

--------------

## 实现细节

1. 需要分别渲染 3 个表格
    1. mainTable 主体表格
    2. leftFixedTable 左边的固定列表格
    3. rightFixedTable 右边固定列表格
2. 监听 mainTable 和 fixedTable 的 scroll 事件，同步所有的表格的列的显示区域
3. 向所有的行（ row ）元素 tr 监听 mouseenter 事件，确保鼠标移过对应的行所有的表格都有一致的表现
4. 记录第一列的所有的格子 （ td ）的高度信息，用于给固定表格的格子高度
5. 记录第一行的格子的宽度信息，给 TableHeader 同步 TableBody 的宽度信息

## 表格 Column 的宽度

目前主流的 `Table` 组件实现固定 `column` 时需要指定 `column` 的宽度，但是这样会定义更多 `UI` 相关的信息，例如 `antd`

```js
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150, // 有 UI 相关的定义
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150, // 有 UI 相关的定义
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

...
```

这样我认为会有一定 __问题__ ，因为根据以往的项目来看，这样会「分散开发时的注意力」，就算反复调试的 `width` 也未必准确，毕竟内容是不确定的。

__所以 uke-table 对 column 的宽度做了计算优化，达到「column 自适应内容宽度」，超出一定宽度会自动换行这样的目的。__ 从而让开发更加专注于业务，而不是 UI 信息。

uke-table 文档: [https://ui.thinkmore.xyz/Table][ukelli-table]

[ukelli-table]:https://ui.thinkmore.xyz/Table
