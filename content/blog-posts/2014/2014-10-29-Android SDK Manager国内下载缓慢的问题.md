---
author: Alex
date: 2014-10-29
layout: post
title: Android SDK Manager国内下载缓慢的问题
keywords: Android SDK Manager国内下载缓慢的问题
tags:
  - 记录
---

## Android SDK Manager国内下载缓慢的问题

在Android SDK Manager Setting 窗口设置HTTP Proxy server和HTTP Proxy Port这个2个参数，分别设置为：

```shell
HTTP Proxy server：mirrors.neusoft.edu.cn
HTTP Proxy Por：80
```

然后把下面的Force ..http://...sources to be fetched using http://..选项打钩，close Android SDK Manager Setting，然后在重新启动Android SDK Manager Setting，这时就可以快速下载了（你的网速要快哦）
