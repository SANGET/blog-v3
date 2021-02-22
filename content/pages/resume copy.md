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

## 个人简介（Intro）

我是张相杰（Alex Chueng），前端工程师，8 年 web 开发经验(2 年后端开发经验)。目前参与业务低代码平台建设。过去曾为公司积累前端基础建设，包括 UI 库、前端工程脚手架、管理系统模版引擎等。

---

## 技能树（Skill matrix）

- 前端：`TS`, `JS`, `React`, `Redux`, `Scss`, `Gatsby`
- 后端：`Node`, `Webpack`, `Nest`, `TypeORM`, `SQL`, `MySQL`
- 测试：`Jest`, `Mocha`, `Cypress`
- DevOps：`Docker`, `Netlify`
- 工具：`Mac`, `Git`, `VSCode`, `Jira`

---

## 工作经历（Work experience）

### 浩云科技

> 2020.04 - 至今（广东 ｜ 广州）｜ 已上市

- 公司介绍：金融安防、智慧物联解决方案供应商
- 行业介绍：金融安防、智慧安防、IoT
- 职位：前端工程师
- 职责：
  - 参与业务低代码平台前端架构设计
  - 负责页面设计模块设计与实现
  - 参与数据建模模块设计与实现

### Synergy88

> 2015.02 - 2020.02 （海外 | 马尼拉）

- 公司简介：为母公司提供业务系统研发服务
- 行业介绍：地产、游戏、餐饮
- 职位：前端组长
- 职责：
  - 为公司沉淀业务的前端技术
  - 负责公司所有产品的前端（客户端）的实现和交付
  - 负责公司前端组建设

### 广州海关技术处

> 2013.07 - 2015.01 （广东 | 广州）

- 单位简介：广州海关-技术处-软件科，为中国海关开发`业务系统`，帮助办事部门办公电子化
- 行业介绍：海关事务、进出口管理
- 职位：软件工程师
- 职责：
  - 负责业务系统原型制作，业务逻辑开发

---

## 项目（Project involved）

### 低代码平台

> 浩云科技

- 介绍：业务低代码平台，提供可视化的页面设计、业务设计、数据建模能力，提供应用云部署方案。
- 职责：负责低代码平台的前端页面建模系统
- 工作成果：
  - 参与业务低代码平台前端架构设计
  - 负责页面设计模块设计与实现
  - 参与数据建模模块设计与实现
  - 参与应用源代码生成方案设计
- 技术：
  - 前端：`react` `redux` `react-dnd` `yup`
  - web 资源服务：`nest` `webpack`
  - 平台服务：`java`

### @deer-ui

> Synergy88

- 介绍：基于 `React` 的 UI 组织，为快速构建 web 应用提供灵活、可扩展的基础支持
- 在线应用：
  - 公司业务系统
  - [管理系统模版引擎][scaffold-demo]
  - [IM 客户端][elk-chat]
  - [UI 文档生成器][react-ui-doc]
  - [SSR 静态网站生成器][gatsby-theme-elk]
- 技术选型：`react`
- 相关资源
  - [@deer-ui GitHub][deer-ui]
  - [@deer-ui online doc][ui-doc]

### 交易系统

> Synergy88

- 介绍：基于代理层级的交易系统
- 主要负责：提供前端基础技术支持, 业务模块开发
- 技术选型：
  - 前端：
    - 基础：`react`, `redux`, `typescript`
    - web 应用、PWA：`react`, `react-native`
    - 移动端应用：`react-native`
    - 环境构建：`webpack`
    - 模块管理：`yarn workspace`
  - 后端：
    - `golang` `MySql`
  - 测试：`jest`, `cypress`
- 技术选型：`react`, `react-native`, `node`

### 餐饮配送平台

> Synergy88

- 介绍：本地餐饮配送服务平台。_zan.com，服务已下线_
- 主要负责：产品的前端开发和交付
- 技术选型：`PWA` `react` `redux`

<!-- ### 前端资源发布系统

> Synergy88

- 介绍：用于管理公司所有产品的前端资源的部署流程
- 主要负责：项目负责人
- 动机：随着公司业务上升，为了更好地管理产品的前端发布流程而制作的
- 工作流程：本地构建 -> 登入发布系统 -> 上传 built package -> 发布 -> 应用通过 ssh 将资源推送到部署服务器，并备份原有资源
- 技术选型：`@deer-ui/admin-scaffold`, `@mini-code/web-server`, `lowDB` -->

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

### 个人项目

- 个人项目
  - BlogHelper：基于 `AWS Lambda` 的博客助理服务，提供`点赞`，`访客记录`功能
    - [GitHub](https://github.com/SANGET/blog-helper-serverless)
  - Base64Helper：Chrome extension，用于 base64 -> string 的互相转换
- @mini-code
  - 介绍：`@mini-code` 是一个 web 前端通用函数组织，提供前端应用的开发和构建环境，数据处理，RESTFul API 支持，测试流程等支持等
  - [GitHub](https://github.com/minimal-studio)

---

## 自我评价

`coding`、`读书`、`运动`、`摄影`、`吉他` 、`自律`、`自我驱动`，`极简主义`、`完美主义`

---

## 联系方式

- Email：<a href="mailto:zh.sanget@gmail.com" target="_top">zh.sanget@gmail.com</a>
  <!-- - <a href="mailto:zzzxjalex@outlook" target="_top">zzzxjalex@outlook.com</a> -->
  <!-- - <a href="mailto:zh.sanget@gmail.com" target="_top">zh.sanget@gmail.com</a> -->
<!-- - Telegram：`atob("YWFhYWFhYWxsbGxsbGxlZWVlZWVleHh4eHh4eA==")` -->
- 电话：`atob("MTM2NjIzNDQ5MTc=")`
- 社交：
  - [GitHub](https://github.com/SANGET)
  <!-- - [LinkedIn][linkedIn] -->

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
