---
author: Alex
layout: page
title: Alex's Resume
---

<escape>
  <div class="no-print simple-nav">
    <a href="/resume_en" class="mr20">English version</a>
    <a href="https://cdn.jsdelivr.net/gh/SANGET/blog-v3@master/content/assets/other/resume.pdf">PDF简历下载</a>
  </div>
</escape>

## 个人简介

我是张相杰（Alex），前端工程师，从事前端相关工作六年。过去主要工作为：前端基础工具建设，业务系统前端功能模块研发，前端团队建设。

喜欢 `coding`、`读书`、`运动`、`摄影`、`吉他`

Tags: `自律`、`自我驱动`，`极简主义`、`完美主义`

## 技能树

- 前端: `Typescript`, `Javascript`, `React`, `React-Native`, `Redux`, `Flutter`, `Webpack`, `Scss`, `CSS in JS`
- 后端: `Node`, `DynamoDB`
- 部署: `Docker`, `Netlify`
- 工具: `Mac`, `GitHub`, `VSCode`, `Atom`, `Telegram`, `Google`, `Gmail`, `Jira`

## 工作经历

### Synergy88

> 2015.02 - 至今 （海外/马尼拉）

- 公司简介：toB 综合技术提供商，为集团下市场部门研发业务系统，包括 SaaS 产品、游戏、IM 服务
- 行业介绍：地产、餐饮、游戏动画
- 职位：前端组负责人
- 职责：负责前端基础建设，UI Components、Admin-Scaffold 搭建，代码审阅，前端任务分配及进度跟踪，前端技能培训等

### 广州海关技术处

> 2013.07 - 2015.01 （广东/广州）

- 单位简介：广州海关技术处软件科，为中国海关研发业务系统，例如车辆进出关、国际司法业务系统
- 行业介绍：中国海关事务，进出口管理业务
- 职位：软件工程师
- 职责：负责中国海关内部业务系统的原型制作，系统 web api 开发、系统前端模块开发

<!-- ## 产品

### Admin-Scaffold

- 动机：为了满足公司快速开发业务系统的需求，并在「交付产品的交互、视觉一致（可用性）」，「敏捷开发和可持续稳定发布（可扩展性）」，「产品可持续维护，降低人员流动对项目的影响（可维护性）」等方面做了平衡而打造的前端基础产品
- 职责：发起人，制作者
- [在线地址][scaffold-demo] -->

## 项目

### @mini-code

> Synergy88

- 介绍：`@mini-code` 是一个 web 前端通用函数组织，计划用最简单的方式让想法产品化
- 组织结构：
  - [组织地址](https://github.com/minimal-studio)
  - `@mini-code/base-func` 核心函数库，包含处理常用的 `数组`, `数字`, `时间`, `订阅发布` 等功能模块
  - `@mini-code/request` 通讯工具类库，基于 fetch 的封装，采取中间件机制，对数据进行过滤。内置了「RC4 加解密」和「LZMA 压解缩」中间件，支持 RESTFul API
  - `@mini-code/scripts` 基于 `react-scripts` 扩展的开发环境，提供 `react + typescript` 应用的开发环境
  - `@mini-code/page-generator` 页面生成工具，为了减轻繁重的管理系统页面的开发任务工作量而制作，提高页面一致性，可维护性
  - `version-helper` 产品版本助手，提供统一的版本提示。版本号构成：`x.y.z+buildVersion`
  - `web-server` 基于 node 的 web server，适用于短平快的服务构建需求。`typescript + typeORM + express + mysql + docker`

### @deer-ui

> Synergy88

- 介绍：`@deer-ui` 是一个 UI 组织，为快速构建 web 应用提供灵活、可扩展的开发方式。由 `@deer-ui/core` 作为核心驱动，提供通用 UI Components，整合并提供 [`Form Controller`][form-generator]、[`Table Template`][table-desc]，快速响应 web 开发，管理后台开发
- 组织结构：
  - `@deer-ui/core` 核心 UI 库，提供可扩展的基础，基于原子设计原则
  - `@deer-ui/enhance-ui` 基于 `@deer-ui/core` 的增强 UI 组件集合
  - `@deer-ui/admin-scaffold` 管理后台 `Scaffold`
- 技术标签: `Typescript`, `React`
- 基于 @deer-ui 的应用：
  - [@deer-ui/admin-scaffold][scaffold-demo]
  - [react-ui-doc][react-ui-doc] 用 mdx 编写 UI Components 文档的生成器
  - [elk_chat][elk-chat]
  <!-- - [admin-dashboard][dashboard-doc] -->
- 相关资源
  - [项目仓库][deer-ui]
  - [在线文档][ui-doc]

### IM 服务(Elk_Chat)

> Synergy88

- 介绍：与公司业务结合，满足内部 IM 使用需求
- 主要负责：web 客户端研发，native 客户端（Flutter）研发
- 技术结构：
  - 前后端分离
  - web 客户端基于 `Typescript`
  - 项目结构分为 3 层结构，SDK -> Actions -> UI
    1. `SDK` 为「以 `websocket` 作为通讯通道， `protobuf` 作为底层通讯协议」的 `API` 封装，提供给 Actions 与 UI 数据支持
    2. `Actions` 为应用核心业务数据和对应的操作的封装，拥有一套完整的内部数据结构，为 `UI` 提供数据。主要使用 Redux 管理方案
    3. `UI` 为数据展示以及处理响应用户操作，以及业务处理等。主要使用 `React`
- 技术标签：`Typescript`, `Protobuf`, `React`, `Redux`, `Flutter`
- 相关资源
  - [项目仓库][elk-chat]（客户端开源）
  - [在线地址][chat-online]

### 代理-交易系统

> Synergy88

- 介绍：代理-交易记账产品，提供基于代理角色层级的交易记账解决方案，SaaS 方向
- 主要负责：提供前端基础技术支持，业务模块开发，模块划分，协调设计、前端对接，协调前后端对接，开发任务分配与跟踪，代码审阅等
- 项目重构:
  - 迭代了 5 个大版本，最新版本基于 `typescript` 编写，采用 `lerna + yarn workspace` 的方式重新组织，平衡项目的可维护性、可扩展性、敏捷开发、并行开发等需求，[查看详情][refactor-system]
- 技术分析:
  - React 作为基础 UI 渲染引擎
  - Yarn workspace 管理通用业务模块，提供 React 与 React-Native 共用
  - lerna 管理共用模块之间的关系
  - Typescript 提升代码的可预测性
- 技术标签: `React`, `ReactNative`, `Node`

### 餐饮配送平台

> Synergy88 「服务已下线，原 zan.com」

- 介绍：本地餐饮配送服务平台
- 主要负责：提供前端基础技术支持，业务模块开发，模块划分，协调设计、前端对接，协调前后端对接，开发任务分配与跟踪，代码审阅等
- 技术分析:
  - 基于移动端的 `PWA` 应用
  - 客户端 `React + Redux`
  - 管理系统 `Admin-Scaffold`

### 前端资源发布系统

> Synergy88「服务已下线，使用 Jenkins 代替」

- 介绍：用于管理公司所有产品的前端资源的部署流程
- 主要负责：项目发起者、制作者
- 动机：随着公司业务逐渐增加，为了更好地管理产品的前端资源的发布流程而制作的管理系统
- 工作流程：本地构建 -> 登陆发布系统 -> 上传 built package -> 发布 -> 应用通过 ssh 将资源推送到部署服务器，并备份原有资源
- 技术分析：
  - React：管理系统的前端支持
  - Node：资源管理，执行 shell 脚本
  - lowDB：基于 `json` 的数据管理工具

<!-- ### node-web-server

> Synergy88

- 介绍：包含通用的权限控制，RESTFul 业务开发等
- 目的：提供 SaaS 业务系统的快速业务开发支持
- 动机：由于前后端分离的开发方式产生了接口对接沟通成本（后端人员并不考虑前端使用情况），计划从数据库类型出发，到业务 API 的开发，通过 ts 将 API 数据结构封装成 SDK，提供给客户端使用，减少开发沟通成本
- 技术标签：`Node`, `Typescript`, `Express`, `Koa`, `TypeORM`, `MYSql`, `Docker`
- [项目仓库](https://github.com/SANGET/node-web-server) -->

-----

### 国际司综合业务管理系统

> 广州海关

- 简介：中国海关总署国际司业务系统，处理国内海关人员和领导出入境的流程
- 系统架构：系统分层架构，分为Data、Framework、Workflow、User、Web、Web Api，测试先行，TDD（测试驱动开发）模式，实现底层逻辑高度重用，适配其他业务系统，开发其他业务系统，只需要实现表现层 Web
- 本人职责：负责项目前端设计、实现和前端组织，web api 制定
- 技术标签：`Angular`, `D3`, `RequestJs`, `.NET MVC 4.5`, `Web API`, `MongoDB`, `MSSQL`

### 海关邮递物品查询系统

> 广州海关

- 本人职责：项目海关邮递物件的微信接入
- 微信公众号：广州海关12360（gz12360）的邮递物件查询系统
- 技术标签：`Polymer`, `Node`, `MONO`

## 联系方式

- <a href="mailto:zh.sanget@gmail.com" target="_top">zh.sanget@gmail.com</a>
- <a href="https://github.com/SANGET" target="_blank">GitHub</a>
- [个人博客](https://thinkmore.xyz/)

## 教育经历

- 广东轻工职业技术学院 ~2013

[request]: https://github.com/minimal-studio/request
[basic-helper]: https://github.com/minimal-studio/basic-helper
[deer-ui]: https://github.com/minimal-studio/deer-ui
[admin-scaffold]: https://github.com/minimal-studio/admin-scaffold
[admin-dashboard]: https://github.com/minimal-studio/admin-dashboard
[elk-chat]: https://github.com/elk-chat/elk_web
[chat-online]: https://chat.thinkmore.xyz/

[dashboard-doc]: https://admin.thinkmore.xyz/
[scaffold-demo]: https://scaffold.thinkmore.xyz/
[ui-doc]: https://ui.thinkmore.xyz/

[form-generator]: https://thinkmore.xyz/%E5%9F%BA%E4%BA%8Ereact%E6%89%93%E9%80%A0%E6%9B%B4%E5%A5%BD%E7%94%A8%E7%9A%84%E8%81%9A%E5%90%88%E8%A1%A8%E5%8D%95
[table-desc]: https://ui.thinkmore.xyz/Table
[refactor-system]: https://thinkmore.xyz/%E9%87%8D%E6%9E%84%E9%A1%B9%E7%9B%AE%E4%B9%8B%E8%B7%AF(%E4%B8%80)
[react-ui-doc]: https://github.com/SANGET/react-ui-doc
