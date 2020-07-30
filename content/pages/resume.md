---
author: Alex
layout: page
title: Alex's Resume
---

<escape>
  <div class="no-print simple-nav">
    <a href="/resume_en" class="mr20">English version</a>
    <a href="https://cdn.jsdelivr.net/gh/SANGET/resource@master/files/resume.pdf">PDF简历下载</a>
  </div>
</escape>

## 个人简介

我是张相杰（Alex Chueng），前端工程师，从事前端工作 7 年。过去主要工作为：web 系统设计，前端工程实施，前端基础建设，产品研发等。

## 技能树

- 前端：`TS`, `JS`, `React`, `React-Native`, `Redux`, `Webpack`, `Scss`, `Gatsby`, `Next`
- 后端：`Node`, `TypeORM`, `SQL`, `DynamoDB`, `MySQL`
- 测试：`Jest`, `Mocha`, `Cypress`
- 部署：`Docker`, `Netlify`, `Travis`
- 工具：`Mac`, `GitHub`, `VSCode`, `Jira`

## 工作经历

### 浩云科技

> 2020.04 - 至今（广东 ｜ 广州）

- 公司介绍：安防设备、安防 PaaS 系统解决方案供应商
- 行业介绍：安防领域
- 职位：前端工程师
- 职责：
  - 低代码云平台系统前端架构
  - 前端工程实施

### Synergy88

> 2015.02 - 2020.02 （海外 | 马尼拉）

- 公司简介：toB 综合技术提供商，为集团内市场部门提供`业务系统研发`、`产品研发`等服务，例如`交易系统`、`财务系统`、`IM 服务`、`游戏`等
- 行业介绍：IT、地产、餐饮、游戏动画
- 职位：前端组负责人
- 职责：
  - 前端基础建设、前端团队建设
  - 产品质量把控：代码审阅、任务分配、进度跟踪、推进 UT、e2e 测试

### 广州海关技术处

> 2013.07 - 2015.01 （广东 | 广州）

- 单位简介：广州海关技术处软件科，为中国海关研发`业务系统`。例如`车辆进出关`、`国际司业务系统` 等
- 行业介绍：海关事务，进出口业务，公共服务
- 职位：软件工程师
- 职责：
  - 中国海关内部业务系统的原型制作
  - .NET web API 研发
  - 系统前端模块研发

## 项目

### 「可视化 & 低代码」云平台

- 介绍：金融领域安防系统的「可视化 & 低代码」云平台，用于生产的系统主要应用于金融企业的安防管理，例如银行办公大楼的物理监控设备，门禁、摄像头、安防等设备的管控。
- 主要负责：
  - 系统的前端架构设计
  - 业务模型设计与可行性验证
  - 核心模块设计与实施
    - 技术选型
    - 可视化编辑器技术
    - 低代码引擎
    - DSL 解析技术
- 技术选型：`react`

### @deer-ui

> Synergy88

- 介绍：基于 `React` 的 UI 组织，为快速构建 web 应用提供灵活、可扩展的基础支持
- 基于 `@deer-ui` 的应用：
  - [@deer-ui/admin-scaffold][scaffold-demo] 管理系统 scaffold
  - [elk_chat][elk-chat] 基于 protobuf 的 web IM 客户端
  - [react-ui-doc][react-ui-doc] 使用 mdx 编写 UI Components 文档的文档生成器
  - [gatsby-theme-elk][gatsby-theme-elk] 基于 markdown 的网站生成工具
  - 公司业务系统
- 技术选型：`react`
- 相关资源
  - [@deer-ui GitHub][deer-ui]
  - [@deer-ui online doc][ui-doc]

<!-- ### admin-scaffold

管理系统 scaffold -->

### IM 服务

> Synergy88

- 介绍：与公司业务结合，满足内部 IM 使用需求
- 主要负责：web 客户端研发，native 客户端（flutter）研发
- 技术选型：`protobuf`, `react`, `redux`, `flutter`
- 相关资源
  - [GitHub][elk-chat]（客户端开源）
  - [Elk-Chat Online][chat-online]

### 交易系统

> Synergy88

- 介绍：基于代理层级的交易系统
- 主要负责：提供前端基础技术支持, 业务模块开发
- 技术分析：
  - 基础：`react`, `redux`, `typescript`
  - web 应用、PWA：`react`, `react-native`
  - 移动端应用：`react-native`
  - 环境构建：`webpack`
  - 模块管理：`yarn workspace`
  - 测试：`jest`, `cypress`
- 技术选型：`react`, `react-native`, `node`

### 餐饮配送平台

> Synergy88

- 介绍：本地餐饮配送服务平台。zan.com，服务已下线
- 主要负责：提供前端基础技术支持；业务模块开发；模块划分；协调设计、前端对接；协调前后端对；，开发任务分配与跟踪；代码审阅等
- 技术选型：`PWA`, `react + redux`, `admin-scaffold`

### 前端资源发布系统

> Synergy88

- 介绍：用于管理公司所有产品的前端资源的部署流程
- 主要负责：项目负责人
- 动机：随着公司业务上升，为了更好地管理产品的前端发布流程而制作的
- 工作流程：本地构建 -> 登入发布系统 -> 上传 built package -> 发布 -> 应用通过 ssh 将资源推送到部署服务器，并备份原有资源
- 技术选型：`@deer-ui/admin-scaffold`, `@mini-code/web-server`, `lowDB`

-----

### 国际司综合业务管理系统

> 广州海关 - 业务系统应用

- 简介：中国海关总署国际司业务系统，处理国内海关人员和领导出入境的流程
- 系统架构：系统分层架构，分为Data、Framework、Workflow、User、Web、Web Api，TDD（测试驱动开发）模式，实现底层逻辑高度重用，适配其他业务系统，开发其他业务系统，只需要实现表现层 Web
- 本人职责：负责项目前端设计、实现和前端组织，web api 制定
- 技术选型：`Angular`, `D3`, `RequestJs`, `.NET MVC 4.5`, `Web API`, `MongoDB`, `MSSQL`

### 海关邮递物品查询系统

> 广州海关 - 业务系统应用

- 本人职责：项目海关邮递物件的微信接入
- 微信公众号：广州海关12360（gz12360）的邮递物件查询系统
- 技术选型：`Polymer`, `Node`, `MONO`

-----

### 更多

> 个人项目

- BlogHelper：`serverless` 博客助理服务，提供`点赞（like）`，`访客记录（visitor）`等功能
  - [GitHub](https://github.com/SANGET/blog-helper-serverless)
- Base64Helper：Chrome extension，用于 base64 -> string 的互相转换

> @mini-code

- 介绍：`@mini-code` 是一个 web 前端通用函数组织，提供前端应用的开发和构建环境，数据处理，RESTFul API 支持，测试流程等支持等
- 相关资源
  - [GitHub](https://github.com/minimal-studio)

## 自我评价

`coding`、`读书`、`运动`、`摄影`、`吉他` 、`自律`、`自我驱动`，`极简主义`、`完美主义`

## 联系方式

- Email：
  - <a href="mailto:zzzxjalex@outlook" target="_top">zzzxjalex@outlook.com</a>
  - <a href="mailto:zh.sanget@gmail.com" target="_top">zh.sanget@gmail.com</a>
- Telegram：`atob("YWFhYWFhYWxsbGxsbGxlZWVlZWVleHh4eHh4eA==")`
- 电话号码：`atob("MTM2NjIzNDQ5MTc=")`
- 社交：
  - [GitHub](https://github.com/SANGET)
  - [LinkedIn][linkedIn]

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

[linkedIn]: https://www.linkedin.com/in/alex-zhang-391551191/
