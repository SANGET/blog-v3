---
author: Alex
date: 2020-01-01
layout: post
title: 通过 serverless.js 管理 AWS 的 serverless 服务的开发部署
description: 一直都听说 serverless，在最近的闲暇时间研究了一下 AWS 的各种服务，并且记录了如何通过 serverless.js 构建适合多个云端平台的轻量级服务。
tags:
  - 记录
  - serverless
---

> 参考：https://aws.amazon.com/cn/getting-started/projects/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/

跟着官方教程可以初步对 AWS 提供的各种服务有大概的了解，同时可以知道各个服务之间是如何通讯结合使用的。也不得不感叹亚马逊的基础设施做的相当好。

![web services structure](../../assets/images/serverless/aws_services.png)

## 准备

- AWS 账号（非中国区），并且登陆到 AWS 的 dashboard。
- 到 [serverless.com](https://serverless.com/) 设置 cli 并且登陆。

## 开始

添加一个 serverless app

![web services structure](../../assets/images/serverless/serverless_add_app.png)

然后进入 app，跟着步骤走就 OK 了。

![web services structure](../../assets/images/serverless/create_service.png)

然后得到一个基础的 serverless 项目

```treeview
+-- handler.js
+-- serverless.yml
```

这个时候其实已经可以部署到 AWS 了。

但是这只是刚刚开始而已。

## 添加 plugin

这个时候需要在项目目录添加 package.json，并且安装依赖，以下事例为 typescript：

```shell
# AWS 提供的 sdk
yarn add aws-sdk

# 依赖关键的插件
yarn add -D serverless-dynamodb-local serverless-offline serverless-plugin-typescript typescript

# 通过 serverless 提供的 cli 安装 dynamodb 到本地
sls dynamodb install
```

说明下几个关键的 plugin：

- serverless-dynamodb-local
