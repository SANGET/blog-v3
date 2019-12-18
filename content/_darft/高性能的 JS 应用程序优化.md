---
author: Alex
date: 2019-08-10
layout: post
title: 高性能的 JS 应用程序
description: 高性能的 JS 应用程序
keywords: 高性能 JS
# # permalink: "/application-tech-question"
tags:
  - 前端
  - 记录
---

从最根本的 JS 执行和 UI 渲染开始

## JS 执行时间

对于浏览器而言，UI 渲染线程和 JS 执行线程是两个任务，但是都在一个执行线程中，而且 JS 执行线程是高于 UI 渲染线程的，浏览器需要先执行 JS 获取数据变化再执行下一步 UI 渲染。所以如果 JS 执行时间超过一定时间，最显著的就是界面卡顿。

如果想要达到 60 FPS 的渲染效果，则每次 JS 执行时间不能超过 16ms。这就是 React Fiber 的基本思路，调度和分割每次 JS 执行片段，让每一次 JS 执行时间控制在 16ms 以内，达到 60 FPS 的渲染效果。

在编写代码的时候要切记，某个功能不易一次做太多的计算，如果计算量很大，则需要主动让出线程让 UI 渲染。让出线程很简单，只需要 setTimeout。

## 浏览器解析 HTML 构建 DOM

编译原理

## 参考

- 高性能 JavaScript
- 
