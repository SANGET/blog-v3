---
author: Alex
date: 2019-10-10
layout: post
title: 使用 Docker 搭建 Node 开发环境
description: 在开发后端服务时，需要在本地配置数据库，Redis 等环境，很是麻烦，如果直接使用 Docker 来配置，则简单方便的多。
keywords: 
  - Docker 配置开发环境
tags:
  - 技术
  - 记录
  - Docker
---

最近在准备一个 SaaS 系统的调研、基础技术准备，遇到了环境搭建的问题，可预见的开发阶段不会使用远程公用数据库，需要做本地开发，每个人都本地配置 MySql 数据库和 Redis，是很麻烦的事情，所以想到使用 Docker 来配置开发环境。

## 准备

1. Mac 系统
2. 安装 Docker（教程很多）
3. 基本的 Docker 使用知识

## 开发环境需求

为了方便开发，保证程序的质量，我们决定使用熟悉的 Node 开发，Typescript 作为基础语法检查，并且开发时，保存文件后程序自动重载，所以依赖了几项

1. typescript
2. ts-node
3. nodemon

经过测试发现，在 docker container 中跑 nodemon 的效率是很低的，重载一次需要十多秒（3.5GHz CPU，32G 内存的 iMac），所以为了快速重载，node 进程不在 docker container 中运行。docker container 只提供 MySql 和 Redis 服务。

## Docker MySql command

[参考官方说明](https://hub.docker.com/_/mysql)

执行以下命令将自动拉去对应 tag 的 mysql 镜像到本地，并且运行镜像。

```shell
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
```

查看正在运行的 `docker containers`

```shell
docker ps
```

查看该容器的 `log`

```shell
docker logs some-mysql
```

进入该容器的可执行进程

```shell
docker exec -it some-mysql -uroot -p
```

需要输入的 `password` 就是上面的 `my-secret-pw`

通过 Docker 使用 MySql 服务就成功了，比从官网下载 MySql 便捷的多。但是这个只是开始，我们需要与正在开发的应用连接起来。

## docker-compose.yml

在 node 项目的根目录中创建 `docker-compose.yml`，这是用来描述 Docker 服务集合的描述文件，yaml 格式。

```yml
version: "3"
services:
  # 由于尝试了在 docker container 中运行 node 程序效率很低，所以暂时不使用
  # dev:
  #   image: node:12.6
  #   volumes:
  #     - ./:/home/node-web-server/app
  #   working_dir: /home/node-web-server/app
  #   depends_on:
  #     - db
  #   environment:
  #     NODE_ENV: development
  #   ports:
  #     - 5566:5566
  #   command: "yarn start"
  db:
    image: mysql:8.0.17
    # 由于 Node 的 mysql 库太旧了，不支持新的用户验证算法，所以通过这个命令让 mysql 的验证算法回退到旧版
    command: --default-authentication-plugin=mysql_native_password
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_DATABASE=test
      - MYSQL_USER=test
      - MYSQL_PASSWORD=test
    ports:
      - "3306:3306"
    volumes:
      - ./.data/db:/usr/local/mysql/data
```

运行起来

```shell
docker-compose up
```

运行稳定后可以通过 `docker ps` 命令查看，这样通过 Docker 提供 mysql 数据库服务的环境就搭建完成，同理可以把 Redis 和更多需要的服务通过在 docker-compose.yml 描述得到。不得不说 `Docker` 是个了不起的技术。

## 与程序结合

1. 使用 node mysql 手动连接数据库
2. 使用 typeORM 连接

我们使用了 typeORM 来作为数据库连接、数据建模等操作。

具体参考项目 [https://github.com/SANGET/node-web-server](https://github.com/SANGET/node-web-server)（只有基本架构，不涉及具体业务）

## 部署

以后到部署环节再详细记录。
