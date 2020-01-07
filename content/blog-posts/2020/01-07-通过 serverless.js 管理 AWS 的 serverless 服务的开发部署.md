---
author: Alex
date: 2020-01-07
layout: post
title: 通过 serverless.js 管理 AWS 的 serverless 服务的开发部署
description: 一直都听说 serverless，在最近的闲暇时间研究了一下 AWS 的各种服务，并且记录了如何通过 serverless.js 管理 serverless 服务的开发和部署。
tags:
  - 记录
  - serverless
---

一直都听说 serverless，在最近的闲暇时间研究了一下 AWS 的各种服务，并且记录了如何通过 serverless.js serverless 轻量的开发和部署级服务。

> 基于 AWS 的 lambda + dynamoDB + S3 + Cognit 实现一个提供完整用户注册、验证的 serverless 的事例项目的参考：https://aws.amazon.com/cn/getting-started/projects/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/

这是 AWS 的官方构建 serverless 应用的教程，完成它可以对 AWS 提供的各种服务有入门级的了解，可以知道 AWS 各个服务之间是如何合作的。也知道 serverless 的具体结构。

![web services structure](../../assets/images/serverless/aws_services.png)

> 不得不感叹亚马逊的基础设施做的相当好。

## 准备

> 账号

1. AWS 账号（非中国区），并且登陆到 AWS 的 dashboard。
2. 到 `serverless.com` 注册并登陆，并且关联 AWS 的 IAM 的用户。[官网](https://serverless.com/)有详细教程。

> 概念

- `serverless`: 由云计算平台提供的 API gateway + Function runner + DB + static storage + Authorization 等一系列服务组成的服务应用架构。例如 AWS 的 lambda + dynamoDB + S3 + Cognit。
- `serverless.js`: 一个 serverless 结构的 Node 应用的管理工具，提供开发环境、部署流程等功能。

## 开始

在 serverless.com 添加一个 serverless app

![web services structure](../../assets/images/serverless/serverless_add_app.png)

然后进入该 app，跟着详细步骤操作

![web services structure](../../assets/images/serverless/create_service.png)

然后得到一个基础的 serverless 项目

```treeview
+-- handler.js
+-- serverless.yml
```

这个时候已经可以部署到 AWS 了。

但是这只是刚刚开始而已。

## 更进一步

这个时候需要在项目目录添加 package.json，并且安装依赖，使用 typescript：

```shell
# AWS 提供的 sdk
yarn add aws-sdk

# 依赖关键的插件
yarn add -D serverless-dynamodb-local serverless-offline serverless-plugin-typescript typescript
```

在 serverless.yml 文件中添加 plugin 的引用：

```yml
# 需要注意引用顺序
plugins:
  - serverless-plugin-typescript
  - serverless-dynamodb-local
  - serverless-offline
```

安装本地 dynamoDB 环境并且启动服务

```shell
# 通过 serverless 提供的 cli 安装 dynamodb 到本地
sls dynamodb install

# 启动 dynamoDB 服务
sls dynamodb start
```

最后开启本地模拟 lambda 调试服务即可

```shell
sls offline
```

说明下几个关键的 plugin：

- `serverless-dynamodb-local` 将 dynamoDB 安装到本地作为开发环境使用，模拟 dynamoDB
- `serverless-offline` 将启动本地服务调试 handler 的 apis，模拟 lambda
- `serverless-plugin-typescript` 将 ts complie 成执行的 js

## 部署

serverless.js 提供了不同部署方式：

```shell
# 部署整个 handler
sls deploy

# 直接部署指定函数
sls deploy function -f functionName
```

- 更多参考：https://serverless.com/framework/docs/providers/aws/cli-reference/deploy-function/

## 总结

总的来说，serverless 是由云计算平台提供的不同服务的应用结构方案（例如 AWS），特点是按使用情况收费，无需担心应用的 scale，适合一些业务流程简单、有并发需求的应用。例如广告定制追踪之类的场景。

serverless.js 是用于管理一个特定结构的 node 项目的工具，方便管理 serverless 类型应用的开发、部署、维护。

我为什么要研究 serverless？我个人的需求是：由于我的博客是纯静态的，需要添加 like、visit counter、comment 之类的小功能，serverless 也许是个不错的技术方案，顺便为日后可能碰到的场景打下基础。
