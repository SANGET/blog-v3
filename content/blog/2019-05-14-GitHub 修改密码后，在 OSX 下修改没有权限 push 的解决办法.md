---
author: Alex
date: 2019-05-14
layout: post
title: GitHub 修改密码后，在 OSX 下修改没有权限 push 的解决办法
description: GitHub 修改密码后，在 OSX 上的托管在 GitHub 的项目会出现权限问题
keywords: GitHub 修改密码
# permalink: "/github-password-changed"
tags:
  - 记录
---

--------------

GitHub 修改密码后，在 OSX 上的托管在 GitHub 的项目会出现权限问题

```shell
Permission to xx/xxx.git denied to name
```

这个时候需要修改存储在 keychain 的 GitHub 的账号密码，具体是搜索并打开 `keychain`，搜索 `github.com`，找到 `kind=internet password` 的项，点击修改账号密码即可。

![github-password-changed](/assets/images/other/github-password-changed.jpg)
