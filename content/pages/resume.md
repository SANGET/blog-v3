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

我是张相杰（Alex），前端工程师，从事前端相关工作 7 年。过去主要工作为：前端基础建设与应用，前端模块研发，产品研发等。

喜欢 `coding`、`读书`、`运动`、`摄影`、`吉他`

Tags `自律`、`自我驱动`，`极简主义`、`完美主义`

## 技能树

- 前端: `Typescript`, `Javascript`, `React`, `React-Native`, `Redux`, `Flutter`, `Webpack`, `Scss`, `CSS in JS`, `Gatsby`, `Next`
- 后端: `Node`, `DynamoDB`
- 测试: `Jest`, `Nightwatch`, `Cypress`
- 部署: `Docker`, `Netlify`, `Travis`
- 工具: `Mac`, `GitHub`, `VSCode`, `Atom`, `Telegram`, `Google`, `Gmail`, `Jira`

## 工作经历

### Synergy88

> 2015.02 - 2020.02 （海外 | 马尼拉）

- 公司简介：toB 综合技术提供商。为集团旗下的市场部门提供「业务系统研发」、「产品研发」服务，包括「交易系统」、「财务系统」、「游戏」、「IM 服务」
- 行业介绍：地产、餐饮、游戏动画
- 职位：前端组负责人
- 职责：
  - 负责前端基础建设与应用
  - 前端团队建设
  - 代码审阅
  - UT、e2e 测试
  - 前端任务分配及进度跟踪
  - 前端技术分享

### 广州海关技术处

> 2013.07 - 2015.01 （广东 | 广州）

- 单位简介：广州海关技术处软件科，为中国海关研发业务系统。例如车辆进出关、国际司法业务系统
- 行业介绍：海关事务，进出口业务，公共服务
- 职位：软件工程师
- 职责：
  - 中国海关内部业务系统的原型制作
  - .NET web API 研发
  - 系统前端模块研发

## 项目

### @mini-code

> Synergy88 - 前端基础建设

- 介绍：`@mini-code` 是一个 web 前端通用函数组织，提供前端的开发、构建环境、基础数据处理、RESTFul API、测试流程等
- 组织结构：
  - `@mini-code/base-func` 核心函数库，包含处理常用的 `数组`, `数字`, `时间`, `订阅发布` 等功能模块
  - `@mini-code/request` 通讯工具类库，基于 fetch 的封装，采取中间件机制，对数据进行过滤。内置了「RC4 加解密」和「LZMA 压解缩」中间件，支持 RESTFul API
  - `@mini-code/scripts` 基于 `react-scripts` 扩展的开发环境，提供 `react + typescript` 应用的开发环境
  - `@mini-code/page-generator` 页面生成工具，为了减轻繁重的管理系统页面的开发任务工作量而制作，提高页面一致性，可维护性
  - `version-helper` 产品版本助手，提供统一的版本提示。版本号构成：`x.y.z+buildVersion`
  - `web-server` 基于 node 的 web server，适用于短平快的后端服务构建需求。`typescript + typeORM + express + mysql + docker`
- 相关资源
  - [组织地址](https://github.com/minimal-studio)

### @deer-ui

> Synergy88 - 前端基础建设

- 介绍：`@deer-ui` 是一个基于 react 的 UI 组织，为快速构建 web 应用提供灵活、可扩展的前端基础支持。由 `@deer-ui/core` 核心驱动，提供通用 UI Components，快速响应 web 客户端开发、web 管理后台开发等需求
- 组织结构：
  - `@deer-ui/core` 核心 UI 库，提供可扩展的基础，基于原子设计原则
  - `@deer-ui/enhance-ui` 基于 `@deer-ui/core` 的增强 UI 组件集合
  <!-- - `@deer-ui/admin-scaffold` 管理后台 `Scaffold` -->
- 技术标签: `typescript`, `react`
- 基于 @deer-ui 的应用：
  - [@deer-ui/admin-scaffold][scaffold-demo] 管理系统 scaffold
  - [elk_chat][elk-chat] 基于 protobuf 的 IM 客户端
  - [react-ui-doc][react-ui-doc] 使用 mdx 编写 UI Components 文档的文档生成器
  - [gatsby-theme-elk][gatsby-theme-elk] 基于 markdown 的博客管理工具
  - 公司业务系统
  <!-- - [admin-dashboard][dashboard-doc] -->
- 相关资源
  - [@deer-ui github][deer-ui]
  - [@deer-ui online doc][ui-doc]

### IM 服务

> Synergy88 - toC 业务应用

- 介绍：与公司业务结合，满足内部 IM 使用需求
- 主要负责：web 客户端研发，native 客户端（flutter）研发
- 技术结构：
  - 前后端分离
  - web 客户端
    - 分为 3 层结构，SDK -> Actions -> UI
      1. `SDK`：基于 `websocket`、`protobuf` 提供 `API` 基础服务，由 Actions、UI 消费服务。
      2. `Actions`：提供核心业务数据操作，由 `UI` 调度并消费数据。采用 redux + redux saga 管理数据。
      3. `UI`：应用与用户交互层，调度与消费基础 Action 提供的数据和操作。采用 `react` 渲染。
  - native 客户端
    - 与 web 客户端结构类似
    - 采用 `flutter` 构建
- 技术标签：`typescript`, `protobuf`, `react`, `redux`, `flutter`
- 相关资源
  - [项目仓库][elk-chat]（客户端开源）
  - [在线地址][chat-online]

### 代理-交易系统

> Synergy88 - toB 业务应用

- 介绍：代理-交易记账产品，提供基于代理角色层级的交易记账解决方案，SaaS 方向
- 主要负责：提供前端基础技术支持，业务模块开发，模块划分，协调设计、前端对接，协调前后端对接，开发任务分配与跟踪，代码审阅等
- 技术分析:
  - 基础：`react + redux`
  - web 应用、PWA：`react`
  - 移动端应用：`react-native`
  - 环境构建：`webpack`
  - 业务切割：`web app`、`react-native app` 共用业务 `Action`
  - 模块管理：`yarn workspace`
  - 代码质量：`typescript`
  - 测试：`jest`, `Cypress`
<!-- - 项目重构:
  - 持续迭代了 5 个重大版本，最新版基于 `typescript + lerna + yarn workspace` 的方式组织项目
  - [重构详情][refactor-system] -->
- 技术标签: `react`, `react-native`, `node`

### 餐饮配送平台

> Synergy88 - 本地生活服务

- 介绍：本地餐饮配送服务平台。_原 zan.com，服务已下线_
- 主要负责：提供前端基础技术支持，业务模块开发，模块划分，协调设计、前端对接，协调前后端对接，开发任务分配与跟踪，代码审阅等
- 技术分析：
  - 基于移动端的 `PWA` 应用
  - 客户端 `react + redux`
  - 管理系统 `admin-scaffold`

### 前端资源发布系统

> Synergy88 - 内部应用

- 介绍：用于管理公司所有产品的前端资源的部署流程。_使用 Jenkins 代替，服务已下线_
- 主要负责：项目发起者、制作者
- 动机：随着公司业务逐渐增加，为了更好地管理产品的前端资源的发布流程而制作的管理系统
- 工作流程：本地构建 -> 登陆发布系统 -> 上传 built package -> 发布 -> 应用通过 ssh 将资源推送到部署服务器，并备份原有资源
- 技术分析：
  - `react`：管理系统的前端支持
  - `node`：资源管理服务，shell 脚本执行器
  - `lowDB`：基于 `json` 的数据管理工具

<!-- ### node-web-server

> Synergy88

- 介绍：包含通用的权限控制，RESTFul 业务开发等
- 目的：提供 SaaS 业务系统的快速业务开发支持
- 动机：由于前后端分离的开发方式产生了接口对接沟通成本（后端人员并不考虑前端使用情况），计划从数据库类型出发，到业务 API 的开发，通过 ts 将 API 数据结构封装成 SDK，提供给客户端使用，减少开发沟通成本
- 技术标签：`Node`, `typescript`, `Express`, `Koa`, `TypeORM`, `MYSql`, `Docker`
- [项目仓库](https://github.com/SANGET/node-web-server) -->

-----

### 国际司综合业务管理系统

> 广州海关 - 业务系统应用

- 简介：中国海关总署国际司业务系统，处理国内海关人员和领导出入境的流程
- 系统架构：系统分层架构，分为Data、Framework、Workflow、User、Web、Web Api，TDD（测试驱动开发）模式，实现底层逻辑高度重用，适配其他业务系统，开发其他业务系统，只需要实现表现层 Web
- 本人职责：负责项目前端设计、实现和前端组织，web api 制定
- 技术标签：`Angular`, `D3`, `RequestJs`, `.NET MVC 4.5`, `Web API`, `MongoDB`, `MSSQL`

### 海关邮递物品查询系统

> 广州海关 - 业务系统应用

- 本人职责：项目海关邮递物件的微信接入
- 微信公众号：广州海关12360（gz12360）的邮递物件查询系统
- 技术标签：`Polymer`, `Node`, `MONO`

-----

### 更多

> 个人项目

- BlogHelper：基于 `serverless` 的博客助理服务，提供`点赞（like）`，`访客记录（visitor）`，`文章评论（comment）`等功能

## 联系方式

- Email:
  - <a href="mailto:zzzxjalext@outlook" target="_top">zzzxjalext@outlook.com</a> 随时回复
  - <a href="mailto:zh.sanget@gmail.com" target="_top">zh.sanget@gmail.com</a>
- Telegram:
  - atob('YWFhYWFhYWxsbGxsbGxlZWVlZWVleHh4eHh4eA==')
- 电话号码
  - 暂不公开
- 社交
  - [GitHub](https://github.com/SANGET)

<!-- ## 教育

- 广东轻工职业技术学院 ~ 2013 -->

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
[refactor-system]: https://thinkmore.xyz/%E9%87%8D%E6%9E%84%E9%A1%B9%E7%9B%AE(%E4%B8%80)
[react-ui-doc]: https://github.com/SANGET/react-ui-doc
[gatsby-theme-elk]: https://github.com/SANGET/react-ui-doc
