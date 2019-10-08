---
author: Alex
layout: page
title: Alex's Resume
---

<escape>
  <div class="no-print simple-nav">
    <h2>导航</h2>
    <a href="/" style="margin-right: 20px">访问博客</a>
    <a href="/resume_en">English version</a>
  </div>
</escape>

## 个人简介

我是张相杰（Alex），前端工程师，从事前端相关工作六年。过去主要工作为：`UI 框架` 建设、规划和应用； `web 管理后台前端框架` 搭建与应用；前端项目质量把控和团队协调等。

喜欢探寻事物运行原理，喜欢 `读书`、`运动`、`摄影`、`弹吉他`、`coding`。

<escape>
  <div class="no-print">
    <a href="https://cdn.jsdelivr.net/gh/SANGET/gatsby-theme-elk@master/content/assets/other/resume.pdf">PDF简历</a>
  </div>
</escape>

## 技能树

- 前端: `Typescript`, `Javascript`, `React`, `React-Native`, `Redux`, `Flutter`, `Webpack`, `Scss`
- 后端: `Node`
- 部署: `Docker`, `Kubernetes`, `Netlify`
- 工具: `Mac`, `GitHub`, `VSCode`, `Atom`, `Telegram`, `Google`, `Gmail`, `Jira`

## 工作经历

### Synergy88

> 2015.02 - 至今

- 公司简介：toB 综合技术提供商。
- 主营业务：SaaS 商业系统研发、游戏研发、IM 服务。
- 职位：前端负责人
- 职责：负责前端基础框架、脚手架的规划与搭建，代码审阅，项目进度跟进，前端任务分配，前端技能讲解和培训。

### 广州海关技术处

> 2013.07 - 2015.01

- 单位简介：中国海关。
- 主营业务：海关事务。
- 职位：软件工程师
- 职责：负责中国海关内部业务系统的开发和维护，新系统原型制作、前端应用开发。

## 项目

### IM 客户端(Elk-Chat)

> Synergy88

- 项目介绍：主要与公司业务结合，满足内部 IM 使用需求。
- 本人职责：web 客户端制作，Native 客户端（Flutter方向）规划。
- 技术结构：
  - 前后端分离架构。
  - 客户端程序整体使用 `Typescript`。
  - 项目结构分为 3 层结构，SDK -> Actions -> UI。
    1. `SDK` 为「以 `websocket` 作为通讯通道， `protobuf` 作为底层通讯协议」的 `API` 封装，提供给 Actions 与 UI 数据支持。
    2. `Actions` 为应用核心业务数据和对应的操作的封装，拥有一套完整的内部数据结构，为 `UI` 提供数据。主要使用 Redux 管理方案。
    3. `UI` 为数据展示以及处理响应用户操作，以及业务处理等。主要使用 `React`。
- 技术标签：`Typescript`, `Protobuf`, `React`, `Redux`, `Flutter`
- 相关资源
  - 项目仓库（客户端开源）：[https://github.com/elk-chat/elk_web][elk-chat]
  - 在线地址（非商用）：[https://chat.thinkmore.xyz/][chat.ukelli]

### Ukelli-UI

> Synergy88

- 介绍：基于 `React` 的 `UI` 库，提供统一的 UI 交互和表现形式，提供功能齐全的数据录入的 [`聚合表单组件`][form-generator]、[`数据渲染组件`][table-desc]，主要应用于 web 开发，管理后台基础组件。
- 技术结构：
  - 通用轻量的组件集合。
- 技术标签: `Typescript`, `React`, `Node`
- 基于 Ukelli-UI 的应用：
  - [Elk-Chat][elk-chat]
  - [uke-admin-web-scaffold][elk-chat]
- 相关资源
  - 项目仓库：[https://github.com/ukelli/ukelli-ui][ukelli-ui]
  - 在线文档：[https://ui.thinkmore.xyz/][ui-doc]

### 管理系统脚手架

> Synergy88

- 介绍：`uke-admin-web-scaffold` 是基于 `React`、`Ukelli-UI` 的管理后台脚手架，主攻「业务和 UI 分离」、「业务声明式开发」方向，把大部分的通用需求交给后端人员。稳健高效，统一 UI 交互、视觉效果，支持多标签页。
- 目的：为了快速响应日益丰富繁杂的业务管理系统开发需求，减少人员流动对项目的维护影响，高效稳健的开发，而构建的管理系统脚手架工具。
- 主要负责：脚手架整体制作与规划，说明文档编写，功能持续迭代。
- 技术标签: `Typescript`, `React`, `Node`
- 相关资源
  - 项目仓库：[https://github.com/SANGET/uke-admin-web-scaffold][uke-admin-web-scaffold]
  - 在线文档：[https://scaffold.thinkmore.xyz/][uke-admin-web-scaffold-doc]
  - [uke-dashboard][uke-admin-seed]：管理系统模版框架应用，主要为了应对快速开发系统的需求，规范管理后台的开发规范。

### 通讯工具类库

> Synergy88

- 介绍：基于 fetch API 的 HTTP 请求封装，采取中间件机制，对数据进行过滤。内置了「RC4 加解密」和「LZMA 压解缩」中间件，支持中间件扩展，支持 RESTFul API。
- 目的：主要用于一个对于通讯安全有一定要求的项目，尽可能增加通讯数据被抓包解析的成本，以及压缩请求体的体积（最大10M请求体，压缩后为700k）。
- 技术标签: `Typescript`, `RC4`, `LZMA`
- 相关资源
  - 项目仓库：[https://github.com/SANGET/uke-request][uke-request]
  - 在线文档：[https://request.thinkmore.xyz/][uke-request-doc]

### Web Server

> Synergy88

- 介绍：基于 Node 的 web server，支持「不需重启服务亦可动态添加路由模块」，支持 `RESTFul` 应用。
- 目的：提供一个可视化的前端发布系统，主要应用于 ReactNative 的热更新服务。
- 技术标签：`Node`, `Express`, `Koa`, `Docker`
- 相关资源
  - 项目仓库：[https://github.com/SANGET/uke-web-server](https://github.com/SANGET/uke-web-server)

### 商务租赁平台

> Synergy88

- 介绍：与 `EnvatoMarket` 类似的模版租赁系统。需要不断积累设计模版，以及模版前端实现。需要快速响应跟进客户需求。
- 主要负责：提供前端基础技术支持，协调设计资源与前端资源，开发任务跟踪。
- 应用技术：
  - 前后端分离的应用。
  - 中前端使用了 Node 作为中转服务器，主要功能是前端资源调配，IP 过滤，后端对客户端配置中转，ReactNative 的应用热更新服务等。
- 技术标签: `React`, `React-Native`, `Node`, `Electron`

### 国际司综合业务管理系统

> 广州海关

- 项目简介：中国海关总署国际司业务系统，处理国内海关人员和领导出入境的流程。
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

- 自律、自我驱动，不断学习，追求完美，寻求突破。
- 在国外生活 4 年，英语日常交流，无障碍的英文技术文档阅读。

[uke-request]: https://github.com/SANGET/uke-request
[basic-helper]: https://github.com/SANGET/basic-helper
[ukelli-ui]: https://github.com/ukelli/ukelli-ui
[uke-admin-web-scaffold]: https://github.com/SANGET/uke-admin-web-scaffold
[uke-admin-seed]: https://github.com/SANGET/uke-admin-seed
[elk-chat]: https://github.com/elk-chat/elk_web
[chat.ukelli]: https://chat.thinkmore.xyz/

[uke-admin-web-scaffold-doc]: https://scaffold.thinkmore.xyz/
[uke-dashboard-doc]: https://admin.thinkmore.xyz/
[ui-doc]: https://ui.thinkmore.xyz/
[uke-request-doc]: https://request.thinkmore.xyz/
[request-doc]: https://request.thinkmore.xyz/
[basic-doc]: https://basic.thinkmore.xyz/

[form-generator]: https://thinkmore.xyz/%E5%9F%BA%E4%BA%8Ereact%E6%89%93%E9%80%A0%E6%9B%B4%E5%A5%BD%E7%94%A8%E7%9A%84%E8%81%9A%E5%90%88%E8%A1%A8%E5%8D%95
[table-desc]: https://ui.thinkmore.xyz/Table
