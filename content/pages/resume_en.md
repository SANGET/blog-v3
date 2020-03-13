---
author: Alex
layout: page
title: Alex's Resume English version
---

<escape>
  <div class="no-print simple-nav">
    <a href="/resume" class="mr20">中文简历</a>
    <a href="https://cdn.jsdelivr.net/gh/SANGET/resource@master/files/resume_en.pdf">PDF resume</a>
  </div>
</escape>

## My Profile

I am Alex Zhang, a Frontend engineer, seven years experience of Frontend develop. The main work in the pass was: Front-end infrastructure construction, front-end module development, product development, etc.

--------

## Skill

- Frondend:  `Typescript`, `Javascript`, `React`, `React-Native`, `Redux`, `Flutter`, `Webpack`, `Scss`, `CSS in JS`, `Gatsby`, `Next`, `TypeORM`
- Backend: `Node`, `DynamoDB`
- Deployment: `Docker`, `Netlify`, `Travis`
- Testing: `Jest`, `Nightwatch`, `Cypress`
- Tools: `Mac`, `GitHub`, `VSCode`, `Atom`, `Telegram`, `Google`, `Gmail`, `Jira`

--------

## Work experience

### Synergy88

> 2015.02 - 2020.02 (Manila PH)

- Company Info: toB Integrated technology provider
- Main business: Business system development, game development and API access, IM services..
- Position: Frontend team leader.
- Responsibility: Responsible for front-end infrastructure, planning and construction of Frontend-scaffolding, code review, project progress follow-up, front-end task assignment, front-end skills presentation and training.

### Guangzhou Customs

> 2013.07 - 2015.01 (Guangzhou China)

- Unit Info: China Customs.
- Main business: Customs Business.
- Position: Software engineer
- Responsibility: Responsible for the development and maintenance of China Customs internal business system, new system prototyping, front-end application development.

--------

## Project experience

### @mini-code

> Synergy88 - Front-end infrastructure

- Introduction：`@mini-code` is a organization of web frontend of base function library, provide a environment for frontend app's development and deployment, data filter, RESTFul API, Testing, etc.
- Structure：
  - `@mini-code/base-func` Core function library，provide modules of  `Array`, `Number`, `Datetime`, `Eventemitter` 
  - `@mini-code/request` HTTP requestment tool library, based on fetch API, provides data filtering support by middleware. Built-in `RC4 encryption and decryption` and` LZMA decompression` middleware, supporting RESTFul API
  - `@mini-code/scripts` Development environment based on `react-scripts` extension
  - `@mini-code/page-generator` Page generation tool, made to reduce the workload of management system development, improve system consistency and maintainability
  - `version-helper` A library that provides uniform application version numbers
  - `web-server` Based on node's web server, built with`typescript + typeORM + express + mysql + docker`
- Resources
  - [GitHub](https://github.com/minimal-studio)

### @deer-ui

> Synergy88 - Front-end infrastructure

- Introduction：`@ deer-ui` is a UI organization based on` React`, which provides flexible and extensible front-end basic support for quickly startup web applications
- Structure：
  - `@deer-ui/core` Core UI library, providing extensible UI Components foundation. atomic design principles
  - `@deer-ui/enhance-ui` Collection of enhanced UI components based on @ deer-ui / core
- Technical tags: `typescript`, `react`
- Applications：
  - [@deer-ui/admin-scaffold][scaffold-demo] Frontend scaffold for admin system
  - [elk_chat][elk-chat] Protobuf-based IM client
  - [react-ui-doc][react-ui-doc] Document generator for writing UI Components documents with mdx
  - [gatsby-theme-elk][gatsby-theme-elk] Markdown-based website generator
  - Business system of company
- Resources
  - [@deer-ui github][deer-ui]
  - [@deer-ui online doc][ui-doc]

### IM Client

- Github（client open source）: [https://github.com/elk-chat/elk_web][elk-chat]
- Live demo（Not commercial）: [https://chat.thinkmore.xyz/][chat]

> Synergy88

- Project Info: Used in combination with corporate business, for strategic products.
- Responsibility: Web client production, Native client (Flutter direction) planning.
- Technology: Front-end separation architecture. Using `Typescript` to build Client Application. Three layers structure, SDK -> Actions -> UI.
  1. `SDK` is provided with `websocket` as the communication channel, `protobuf` as the underlying communication protocol's `API` package, and provided to Actions and UI data support.
  2. `Actions` is a package for applying core business data and corresponding operations, has a complete internal data structure, provides data for `UI`. Mainly uses Redux management solution.
  3. `UI` for data display and processing in response to user operations, as well as business processing, etc. Use `React` as a renderer.

Technical labels: `Typescript`, `Protobuf`, `React`, `Redux`, `Flutter`

### Business Platform

> Synergy88

- Responsibility: Provide front-end basic technical support, front-end basic framework construction, business development task assignment, and output of various terminals (PC, Mobile, Client) applications.
- Technology: The application of front-end and back-end applications are separated. The front-end uses Node as the transit server, mainly for front-end resource allocation, IP filtering, back-end configuration for client configuration, etc.

Technical labels: `React`, `React-Native`, `Node`, `Electron`

### Guo Ji Si Integrated business management system

> Guangzhou Customs

- Project Info: China Customs Department International Division Business System, handling domestic customs officers and leading entry and exit procedures.
- System structure: System layered architecture, into `Data`, `Framework`, `Workflow`, `User`, `Web`, `Web Api`, TDD（Test-driven development）, realize the underlying logic to be highly reused, adapt to other business systems, If it need to develop other business systems, only need to implement the presentation layer `Web`.
- Responsibility: Responsible for project front-end design, implementation and front-end organization, web api development.

Technical labels: `Angular`, `D3`, `RequestJs`, `.NET MVC 4.5`, `Web API`, `MongoDB`, `MSSQL`

### Customs postal item inquiry system

> Guangzhou Customs

- Responsibility: WeChat access to the customs postal item system.
- WeChat: 广州海关12360（gz12360）的邮递物件查询系统.

Technical labels: `Polymer`, `Node`, `MONO`

--------

## Contact

- Email：
  - <a href="mailto:zzzxjalext@outlook" target="_top">zzzxjalext@outlook.com</a>
  - <a href="mailto:zh.sanget@gmail.com" target="_top">zh.sanget@gmail.com</a>
- Telegram：`atob('YWFhYWFhYWxsbGxsbGxlZWVlZWVleHh4eHh4eA==')`
- Phone：`atob("MTM2NjIzNDQ5MTc=")`：
- Social：
  - [GitHub](https://github.com/SANGET)

## Self-evaluation

<!-- - Living in an English environment for 4 years, improving my self. -->
- Self-discipline, self-motivation, keep learning, pursuit of perfection, seeking breakthrough.

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