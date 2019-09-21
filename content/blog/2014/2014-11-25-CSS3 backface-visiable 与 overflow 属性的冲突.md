---
author: Alex
date: 2014-11-25
layout: post
title: CSS3 backface-visiable 与 overflow 属性的冲突
keywords: CSS3 backface-visiable 与 overflow
# # permalink: "/application-tech-question"
tags:
  - 记录
  - CSS
---

最近在做一个 flip 效果的时候发现一个奇怪的问题，设置了

```css
backface-visiable: hidden;
overflow: hidden
```

的元素反转180度以后背面没有被隐藏，最终还是被Google出来了，overflow会覆盖transform-style: preserve-3d属性，还有以下一些元素会导致 `transform-style: preserve-3d` 失效:

参考地址: http://codepen.io/thebabydino/details/rACbl

Don't set overflow: hidden on elements with 3D transformed children
By Ana Tudor

DESCRIPTION

The 'back' face of the card has a rotateY(180deg) set on it. Both faces have backface-visibility: hidden set. Setting overflow: hidden on their parent (the card) causes the 3D transformed face ('back' face) to disappear and backface-visibility: hidden to be ignored for the other.

From the spec (link):

The following CSS property values require the user agent to create a flattened representation of the descendant elements before they can be applied, and therefore override the behavior of transform-style: preserve-3d:

overflow: any value other than visible.

filter: any value other than none.

clip: any value other than auto.

clip-path: any value other than none.

isolation: used value of isolate.

mask-image: any value other than none.

mask-box-source: any value other than none.

mix-blend-mode: any value other than normal.

The computed value of transform-style is not affected.
