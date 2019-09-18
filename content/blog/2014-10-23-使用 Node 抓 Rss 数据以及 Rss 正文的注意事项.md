---
author: Alex
date: 2014-10-23
layout: post
title: 使用 Node 抓 Rss 数据以及 Rss 正文的注意事项
# # permalink: "/application-tech-question"
keywords: Node, RSS
tags:
  - 记录
  - Node
---

## 注意事项

1. request 模块的中文编码缺陷：使用 requset 去获取中文 html 的时候，要把 encoding 设置为 null ，然后使用 iconv 或者 iconv-lite 转码，否则会出现乱码

```js
request({
  url: feed,
  timeout: 100000,
  poll: false,
  encoding: null
},
function (err, res, body) {
  if (!err && res.statusCode == 200) {
    var bodyDecode = iconvLite.decode(body, 'utf-8'),
    $ = cheerio.load(bodyDecode, {decodeEntities: false})
  }
});
```

2. cheerio 模块加载中文 html 的时候会自动把中文解码为 Unicode，中文全部被转义成 &#xNNNN ，一大坑。使用 load( html ) 的时候要设置为

```js
var $ = cheerio.load(bodyEncoding, {decodeEntities: false});
```

暂时遇到两个比较难搞的问题。

相关链接：https://github.com/yeoman/generator/issues/638
