---
author: Alex
layout: page
title: Alex's Resume
---

<escape>
  <div class="no-print simple-nav">
    <a href="/resume_en">English version</a>
  </div>
</escape>

## 个人简介

我是张相杰（Alex），前端工程师，从事前端相关工作六年。过去主要工作为：业务系统的前端功能规划和实现，前端团队建设，前端技术积累，SaaS 系统研发等。

喜欢探寻事物运行原理，喜欢 `读书`、`运动`、`摄影`、`弹吉他`、`coding`。

<escape>
  <div class="no-print">
    <a href="https://cdn.jsdelivr.net/gh/SANGET/blog-v3@master/content/assets/other/resume.pdf">PDF简历下载</a>
  </div>
</escape>

## 技能树

- 前端: `Typescript`, `Javascript`, `React`, `React-Native`, `Redux`, `Flutter`, `Webpack`, `Scss`, `CSS in JS`
- 后端: `Node`
- 部署: `Docker`, `Kubernetes`, `Netlify`
- 工具: `Mac`, `GitHub`, `VSCode`, `Atom`, `Telegram`, `Google`, `Gmail`, `Jira`

## 工作经历

### Synergy88

> 2015.02 - 至今

- 公司简介：toB 综合技术提供商。
- 主营业务：SaaS 商业系统研发、游戏研发、IM 服务。
- 职位：前端组负责人
- 职责：负责前端基础框架、脚手架的规划与搭建，代码审阅，项目进度跟进，前端任务分配，前端技能讲解和培训。

### 广州海关技术处

> 2013.07 - 2015.01

- 单位简介：中国海关。
- 主营业务：海关事务。
- 职位：软件工程师
- 职责：负责中国海关内部业务系统的开发和维护，新系统原型制作、前端应用开发。

## 项目

### @mini-code

> Synergy88

- 介绍：`@mini-code` 是一个 web 前端通用函数组织，计划用最简单的方式让想法产品化。
- 组织结构：
  - [组织地址](https://github.com/minimal-studio)
  - `@mini-code/base-func` 核心函数库，包含处理常用的 `数组`, `数字`, `时间`, `订阅发布` 等功能模块
  - `@mini-code/request` 通讯工具类库，基于 fetch 的封装，采取中间件机制，对数据进行过滤。内置了「RC4 加解密」和「LZMA 压解缩」中间件，支持 RESTFul API。
  - `@mini-code/scripts` 基于 react-scripts 扩展的开发环境，提供 React typescript 应用的开发与构建环境
  - `@mini-code/page-generator` 页面生成工具，主要用于减轻繁重的管理系统页面的开发任务工作量，以及提高页面的统一性，可维护性

### @deer-ui

> Synergy88

- 介绍：`@deer-ui` 是一个 UI 组织，为构建视觉、交互统一的 web 应用提供灵活、可扩展的开发方式。由基于 `React` 的 `@deer-ui/core` 作为核心驱动，提供 [`聚合表单生成器`][form-generator]、[`数据渲染引擎`][table-desc]，应用于前端 web 开发，管理后台开发。
- 组织结构：
  - `@deer-ui/core` 核心 UI 库，提供可扩展的基础，基于原子设计原则
  - `@deer-ui/enhance-ui` 基于 `@deer-ui/core` 的增强 UI 组件集合
  - `@deer-ui/admin-scaffold` 管理后台 UI 脚手架
- 技术标签: `Typescript`, `React`
- 基于 @deer-ui 的应用：
  - [Elk-Chat][elk-chat]
  <!-- - [@deer-ui/admin-scaffold][admin-scaffold] -->
  - [admin-dashboard][dashboard-doc]
- 相关资源
  - [项目仓库][deer-ui]
  - [在线文档][ui-doc]

### 商业租赁平台

> Synergy88

- 介绍：商业 SaaS 系统，提供某个商业领域的成熟解决方案。长期项目。
- 主要负责：提供前端基础技术支持，业务分析，业务模块开发，协调设计与前端对接，协调前后端对接，开发任务分配与跟踪，代码审阅等。
- 项目重构:
  - 迭代了 5 个大版本，最新结构采用 typescript + lerna + yarn workspace 的方式重新组织，兼顾可维护性、可扩展性、敏捷开发、并行开发等需求，[查看详情][refactor-system]。
- 技术分析:
  - React 作为基础 UI 渲染引擎
  - Yarn workspace 切割共用业务，提供 React 与 React-Native 共用
  - lerna 管理共用模块之间的关系
  - Typescript 提升代码的可预测性
- 技术标签: `React`, `React-Native`, `Node`

### node-web-server

> Synergy88

- 介绍：包含通用的权限控制，RESTFul 业务开发等。
- 目的：提供 SaaS 业务系统的快速业务开发支持。
- 动机：由于前后端分离的开发方式产生了接口对接沟通成本（后端人员并不考虑前端使用情况），计划从数据库类型出发，到业务 API 的开发，通过 ts 将 API 数据结构封装成 SDK，提供给客户端使用，减少开发沟通成本。
- 技术标签：`Node`, `Typescript`, `Express`, `Koa`, `TypeORM`, `MYSql`, `Docker`
- [项目仓库](https://github.com/SANGET/node-web-server)

### IM 客户端(Elk-Chat)

> Synergy88

- 介绍：与公司业务结合，满足内部 IM 使用需求。
- 主要负责：web 客户端研发，native 客户端（Flutter）规划与研发。
- 技术结构：
  - 前后端分离架构。
  - web 客户端整体使用 `Typescript`。
  - 项目结构分为 3 层结构，SDK -> Actions -> UI。
    1. `SDK` 为「以 `websocket` 作为通讯通道， `protobuf` 作为底层通讯协议」的 `API` 封装，提供给 Actions 与 UI 数据支持。
    2. `Actions` 为应用核心业务数据和对应的操作的封装，拥有一套完整的内部数据结构，为 `UI` 提供数据。主要使用 Redux 管理方案。
    3. `UI` 为数据展示以及处理响应用户操作，以及业务处理等。主要使用 `React`。
- 技术标签：`Typescript`, `Protobuf`, `React`, `Redux`, `Flutter`
- 相关资源
  - [项目仓库][elk-chat]（客户端开源）
  - [在线地址][chat-online]

<!-- ### 管理系统脚手架

> Synergy88

- 介绍：`@dear-ui/admin-scaffold` 是基于 `React`、`@deer-ui/core` 的管理后台脚手架，主打「业务和 UI 分离」、「业务声明式开发」方向，把大部分的通用需求交给后端人员。稳健高效，统一 UI 交互、视觉效果，支持多标签页。
- 目的：为了快速响应日益丰富繁杂的业务管理系统开发需求，减少人员流动对项目的维护影响，高效稳健的开发，而构建的管理系统脚手架工具。
- 主要负责：脚手架整体制作与规划，说明文档编写，功能持续迭代。
- 技术标签: `Typescript`, `React`, `Node`
- 相关资源
  - [项目仓库][admin-scaffold]
  - [admin-dashboard][admin-dashboard]：管理系统模版框架应用，主要为了应对快速开发系统的需求，规范管理后台的开发规范。 -->

<!-- ### 通讯工具类库

> Synergy88

- 介绍：基于 fetch API 的 HTTP 请求封装，采取中间件机制，对数据进行过滤。内置了「RC4 加解密」和「LZMA 压解缩」中间件，支持中间件扩展，支持 RESTFul API。
- 目的：主要用于一个对于通讯安全有一定要求的项目，尽可能增加通讯数据结构被破解的成本，以及压缩请求体的体积（最大10M请求体，压缩后为500k）。
- 技术标签: `Typescript`, `RC4`, `LZMA`
- 相关资源
  - [项目仓库][request] -->

### 国际司综合业务管理系统

> 广州海关

- 简介：中国海关总署国际司业务系统，处理国内海关人员和领导出入境的流程。
- 系统架构：系统分层架构，分为Data、Framework、Workflow、User、Web、Web Api，测试先行，TDD（测试驱动开发）模式，实现底层逻辑高度重用，适配其他业务系统，开发其他业务系统，只需要实现表现层 Web。
- 本人职责：负责项目前端设计、实现和前端组织，web api 制定。
- 技术标签：`Angular`, `D3`, `RequestJs`, `.NET MVC 4.5`, `Web API`, `MongoDB`, `MSSQL`

### 海关邮递物品查询系统

> 广州海关

- 本人职责：项目海关邮递物件的微信接入。
- 微信公众号：广州海关12360（gz12360）的邮递物件查询系统。
- 技术标签：`Polymer`, `Node`, `MONO`

## 联系方式

- <a href="mailto:zh.sanget@gmail.com" target="_top">zh.sanget@gmail.com</a>
- <a href="https://github.com/SANGET" target="_blank">GitHub</a>
- [个人博客](https://thinkmore.xyz/)

<!-- ## 教育经历

- 广东轻工职业技术学院 -->

## 自我评价

- `自律`、`自我驱动`，`极简主义`、`完美主义`。
<!-- - 国外生活 5 年，日常可用英语交流，无障碍阅读英文技术文档。 -->

[request]: https://github.com/minimal-studio/request
[basic-helper]: https://github.com/minimal-studio/basic-helper
[deer-ui]: https://github.com/minimal-studio/deer-ui
[admin-scaffold]: https://github.com/minimal-studio/admin-scaffold
[admin-dashboard]: https://github.com/minimal-studio/admin-dashboard
[elk-chat]: https://github.com/elk-chat/elk_web
[chat-online]: https://chat.thinkmore.xyz/

[dashboard-doc]: https://admin.thinkmore.xyz/
[ui-doc]: https://ui.thinkmore.xyz/

[form-generator]: https://thinkmore.xyz/%E5%9F%BA%E4%BA%8Ereact%E6%89%93%E9%80%A0%E6%9B%B4%E5%A5%BD%E7%94%A8%E7%9A%84%E8%81%9A%E5%90%88%E8%A1%A8%E5%8D%95
[table-desc]: https://ui.thinkmore.xyz/Table
[refactor-system]: https://thinkmore.xyz/%E9%87%8D%E6%9E%84%E9%A1%B9%E7%9B%AE%E4%B9%8B%E8%B7%AF(%E4%B8%80)