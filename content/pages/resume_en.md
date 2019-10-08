---
author: Alex
layout: page
title: Alex's Resume
---

<escape>
  <div class="no-print simple-nav">
    <h2>Navigation</h2>
    <a href="/" style="margin-right: 20px">To Blog</a>
    <a href="/resume">中文简历</a>
  </div>
</escape>

## My Profile

I am Alex, who is a Frontend engineer, working on Frontend related for six years. The main work in the pass was: Construction, planning and application of `UI lib`; Construction and application of `Web admin dashboard Framework`; Front-end project quality control and team coordination.

Like to explore the pinciple of how things work, like to `read`, `sport`, `photography`, `playing guitar`, `coding`.

- [More info](/about)
- [Download as PDF](https://cdn.jsdelivr.net/gh/SANGET/gatsby-theme-elk@master/content/assets/other/resume.pdf)

--------

## Skill

- Frontend: `Typescript`, `Javascript`, `React`, `React-Native`, `Redux`, `Flutter`, `Webpack`, `Scss`
- Backend: `Node`
- Deployment: `Docker`, `Kubernetes`, `Netlify`
- Using Tools: `Mac`, `GitHub`, `VSCode`, `Atom`, `Telegram`, `Google`, `Gmail`, `Jira`

--------

## Work experience

### Synergy88

- Company Info: toB Integrated technology provider
- Main business: Business system development, game development and API access, IM services..

> 2015.02 - now

- Position: Frontend team leader.
- Responsibility: Responsible for front-end infrastructure, planning and construction of Frontend-scaffolding, code review, project progress follow-up, front-end task assignment, front-end skills presentation and training.

### Guangzhou Customs

- Unit Info: China Customs.
- Main business: Customs Business.

> 2013.07 - 2015.01

- Position: software engineer
- Responsibility: Responsible for the development and maintenance of China Customs internal business system, new system prototyping, front-end application development.

--------

## Project experience

### IM Client

- Github（client open source）: [https://github.com/elk-chat/elk_web][elk-chat]
- Live demo（Not commercial）: [https://chat.thinkmore.xyz/][chat.ukelli]

> Synergy88

- Project Info: Used in combination with corporate business, for strategic products.
- Responsibility: Web client production, Native client (Flutter direction) planning.
- Technology: Front-end separation architecture. Using `Typescript` to build Client Application. Three layers structure, SDK -> Actions -> UI.
  1. `SDK` is provided with `websocket` as the communication channel, `protobuf` as the underlying communication protocol's `API` package, and provided to Actions and UI data support.
  2. `Actions` is a package for applying core business data and corresponding operations, has a complete internal data structure, provides data for `UI`. Mainly uses Redux management solution.
  3. `UI` for data display and processing in response to user operations, as well as business processing, etc. Use `React` as a renderer.

Technical labels: `Typescript`, `Protobuf`, `React`, `Redux`, `Flutter`

### Front-end base library and framework construction

> Synergy88

Purpose: Standardize how the front-end team develops, improve project development efficiency, establish a sound document mechanism, and maintain projects sustainably.

Libs:

- [`basic-helper`][basic-helper]: Provides commonly used data processing functions such as `Time Processing`, `Money Format Processing`, `Array Processing`, `Universal Subscription Publishing Mechanism`, `Local Storage Interface` (For Web and React-Native), etc.
- [`uke-request`][uke-request]: Http request encapsulation based on fetch API, built-in middleware (built-in RC4 data encryption and decryption, LZMA data decompression middleware) mechanism, RESTFul API support.
- [`ukelli-ui`][ukelli-ui]: Base on `React`'s `UI` Lib, used in all front-end projects of the company, with unified UI interaction and presentation, improving development efficiency.
- [`uke-admin-web-scaffold`][uke-admin-web-scaffold]: Front-end admin manager system's scaffold, with business and UI separation, declarative page business development, improve development efficiency, unified UI interaction, style, support for multi-tab pages, parameter routing jumps, etc.
- [`uke-dashboard`][uke-admin-seed]: Combined with the above-mentioned management system template framework, mainly to meet the needs of rapid development systems, standardize the development specifications of the management background, easy project maintenance.

Technical labels: `Typescript`, `React`, `Node`

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

## Open source libs

- [elk-chat](https://chat.thinkmore.xyz/) IM client
- [basic-helper](https://basic.thinkmore.xyz/) JS basic helper lib
- [uke-request](https://request.thinkmore.xyz/) HTTP request lib with middleware
- [ukelli-ui](https://ui.thinkmore.xyz/) Base on React's UI lib
- [uke-admin-web-scaffold](https://scaffold.thinkmore.xyz/) Scaffold of web admin dashboard
- [uke-dashboard](https://admin.thinkmore.xyz/) Web admin dashboard

<!-- --------

## Educational experience

- Guangdong Industry Technical College -->

--------

## Contact

- <a href="mailto:zh.sanget@gmail.com" target="_top">zh.sanget@gmail.com</a>
- <a href="https://github.com/SANGET" target="_blank">GitHub</a>
- [Personal Blog](https://thinkmore.xyz/)

## Self-evaluation

- Living in an English environment for 4 years, improving my self.
- Self-discipline, self-motivation, keep learning, pursuit of perfection, seeking breakthrough.

[uke-request]: https://github.com/SANGET/uke-request
[basic-helper]: https://github.com/SANGET/basic-helper
[ukelli-ui]: https://github.com/ukelli/ukelli-ui
[uke-admin-web-scaffold]: https://github.com/SANGET/uke-admin-web-scaffold
[uke-admin-seed]: https://github.com/SANGET/uke-admin-seed
[elk-chat]: https://github.com/elk-chat/elk_web
[chat.ukelli]: https://chat.thinkmore.xyz/
