---
author: Alex
date: 2018-10-14
layout: post
title: 使用 React Styleguidist 编写，管理，迭代文档
description: 其实 React Styleguidist 挺难用的，后来改用了 docz
# permalink: /use-react-styleguidist
keywords: 制作前端库文档
tags: 
  - 记录
  - 技术
  - 前端
---

--------------

## 编写文档有条不紊

文档管理是个比较繁琐的事情，如果文档和代码是分离的，代码更新了还要到对应的文档的地方做更改，很难让人持之以恒。

有没有一个方式是只需要在代码的地方写好注释，然后自动生成可交互的文档呢？

用 [React Styleguidist](https://react-styleguidist.js.org/) 可以做到，但是配置比较繁琐，而且也没有中文支持，对中文用户来说很难。

--------------

## 开始吧

1. 安装依赖

> 这里使用了 webpack-blocks, 毕竟不是每个项目都会有 webpack 配置

```shell
# 最好装一个 npx
npm i npx -g

# 然后安装
yarn add webpack react-styleguidist webpack-blocks --dev
```

2. 在项目根目录创建 styleguide.config.js

```js
const { createConfig, babel, postcss } = require('webpack-blocks')
module.exports = {
  webpackConfig: createConfig([babel(), postcss()]),
  components: 'src/core/**/**.js' // 写入对应目录的文档
}
```

3. 启动文档开发模式

```shell
npx styleguidist server

# 这里是 build
npx styleguidist build
```

就好了，React Styleguidist 很强，会自动找所有的 src/**/**.js 的注释，对应的文件，然后生成一份文档。

--------------

## 自定义样式

官方推荐在 styleguide.config.js 中写 style，并且用 React devtool 查找对应的节点，覆盖原有样式。

我觉得这样的设计糟糕透了

- 写到配置文件中不能实时查看样式，需要重启服务才可以看到修改结果，简直智障
- 很费劲去寻找那个样式 react 的组件

那其实可以换一个想法，新增一个 scss 文件，使用 css 选择器 + !important 方式去覆盖，在 styleguide.config.js 中配置 require 参数。

```js
module.exports = {
  ...yourConfig,
  // styleguide/style.scss 自行创建
  require: path.join(__dirname, 'styleguide/style.scss'),
}
```

```css
# 例如修改 sidebar 的背景颜色

[class^=rsg--sidebar] {
  background-color: #fefefe !important;
}
```

--------------

## 自定义入口 index.html 入口模版

这又是另一个智障的设计，不支持通过文件模版的方式引用，只能使用 styleguide.config.js 中的 template 字段来自定义模版，而且写法太难受了，我只想加入 loading 画面以及饮用 icon 或者其它三方库，需要如下写法

```js
module.exports = {
  ...yourConfig,
  template: ({}) => `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>${title}</title>
          ${generateCSSReferences(css, publicPath)}
          <link rel="stylesheet" href="./resource/loading.css">
        </head>
        <body>
          <div id="rsg-root"></div>
            <div class="sk-folding-cube" id="loadingBg">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
          </div>
          ${generateJSReferences(js, publicPath)}
        </body>
      </html>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    `
}
```

--------------

## 总结

同类型的 style guide 也有不少，不过 react styleguidist 相对完善一些

Ukelli-UI 便是基于此方式来编写文档，虽然有些傻，但是还能接受，用 markdown 的方式来写例子，更好维护和查看了

[Ukelli-UI 的 style guide 配置](https://github.com/ukelli/ukelli-ui/blob/master/styleguide.config.js)

--------------

## 参考

- [Ukelli-UI 在线文档](https://ukelli.github.io/ukelli-ui/index.html)
- [React Styleguidist](https://react-styleguidist.js.org/docs/getting-started.html)
- [同类参考](https://react-styleguidist.js.org/docs/cookbook.html#are-there-any-other-projects-like-this)
- [原文](https://thinkmore.xyz/use-react-styleguidist)
