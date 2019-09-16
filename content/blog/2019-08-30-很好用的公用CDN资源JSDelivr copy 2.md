---
author: Alex
date: 2019-08-30
layout: post
title: 很好用的公用CDN资源 JSDelivr
description: 很好用的公用CDN资源JSDelivr
keywords: [公用CDN资源, JSDelivr]
tags:
  - 前端
  - 记录
---

## 前言

由于某些原因，很多公用免费的 CDN 资源在中国大陆并不很好用，就算是付费的，也有一定的限制，例如每天的刷新次数有限之类的。那有没有一款造福人类的，或者造福中国大陆的公用 CDN 呢？

## JSDelivr

先看看官方的介绍：

![](https://cdn.jsdelivr.net/gh/SANGET/blog-v2@master/source/assets/images/other/jsdelivr.png)

> Wow, Awesome!

这是在中国大陆唯一有 license 的公有 CDN，而且实际使用中的访问速度也是极快的：

![](https://cdn.jsdelivr.net/gh/SANGET/blog-v2@master/source/assets/images/other/jsdelivr-speed.png)

> 有些地方没有数据，这是美中不足的地方，但是毕竟是公用免费

## 与 Github、NPM 整合

仅仅如此其实并不够好，JSDelivr 还能够集成 Github、NPM 资源，只需要通过符合 JSDelivr 规则的 URL 引用，即可直接使用 Github 中的资源。

例如本站的图片直接通过 jsdelivr 引用 Github 的资源 `https://cdn.jsdelivr.net/gh/SANGET/blog-v2@master/source/assets/images/other/jsdelivr-speed.png`。

也可以使用发布到 NPM 的资源，这就是生产力。

详细规则参考官网

- [https://www.jsdelivr.com/](https://www.jsdelivr.com/)

## 更多用途

全球（包括中国大陆）访问速度快 + 直接整合 Github 和 NPM 资源，这里的想象空间巨大无比，希望这份美好不要过早消失（滑稽）。
