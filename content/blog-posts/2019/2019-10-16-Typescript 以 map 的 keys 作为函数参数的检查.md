---
author: Alex
date: 2019-10-16
layout: post
title: Typescript 以 map 的 keys 作为函数参数的检查
description: 最近在重构之前的业务项目，发现很多不合理的地方，不利于后期维护。本着长痛不如短痛的理念，使用 typescript 重构整个项目。(800+文件)。
keywords: [重构, typescript 重构]
tags:
  - 记录
  - 重构
---

## 起因

最近在重构之前的业务项目，发现很多不合理的地方，不利于后期维护。本着长痛不如短痛的理念，使用 typescript 重构整个项目。(800+文件)。

把所有配置、服务、资源都抽离到工作区中，统一安排导入。

这里主要是记录 __「函数根据配置的 key 检查传入的参数」。__

## 抛砖引玉

先用一个图片引用的例如来：

- src
  - app
    - index.ts
  - image
    - logo.png

```tsx
// index.ts
<img src={require('../image/logo.png')} />
```

这样 src/app/index.ts 就简单的把 logo 加载了，但是存放和获取图片的方式不那么完美，因为很多相对路径。

那么如果我把图片统一放到工作区内，是不是更上一层楼呢？

调整下项目结构：

- package
  - @images
    - common
      - logo.png
- src
  - app
    - index.ts

```tsx
// index.ts
<img src={require('@images/common/logo.png')} />
```

这样没有了相对路径，看起来舒服了不少。但是如果随着项目图片越来越多，写起来就很多 @image 了，所以能不能更进一步？

如果在 @images 中实现一个配置，可以统一配置图片路径映射，有一个 wrapper 函数用来统一获取图片引用路径的：

```tsx
import { loadImage } from '@images';
// index.ts
<img src={loadImage('common', 'logo.png')} />
```

这样就可以更灵活配置图片的路径了，那么如何实现 `loadImage` 更好？

## 实现配置

现在有以下结构

- package
  - @images
    - index.ts // 主要用于配置图片路径的映射
    - common
      - logo.png
    - banner
      - v1
        - banner-1.jpg
      - v2
        - banner-1.jpg
- src
  - app
    - index.ts

我想加载 banner，可以统一控制 v1 还是 v2

```ts
export const ImageMapper = {
  common: 'common',
  banner: 'banner/v2', // 这里统一控制 v1 还是 v2
  bannerv1: 'banner/v1', // 这里统一控制 v1 还是 v2
};

// 加载图片的路径
export function loadImage(cata: string, image: string) {
  return require(`./${ImageMapper[cata] || cata}/${image}`);
}
```

```tsx
import { loadImage } from '@images';
// index.ts
<img src={loadImage('banner', 'banner-1.jpg')} />
```

这样就可以灵活控制图片的加载路径了。

## 参数检查

但是又有另一个问题，就是如何知道 loadImage 的第一个参数有哪几些可以用？难道还要手写一遍？

```ts
export const ImageMapper = {
  common: 'common',
  banner: 'banner/v2', // 这里统一控制 v1 还是 v2
  bannerv1: 'banner/v1', // 这里统一控制 v1 还是 v2
};

type ImageMapperCata = 'common' | 'banner' | 'bannerv1';

// 加载图片的路径
export function loadImage(cata: ImageMapperCata, image: string) {
  return require(`./${ImageMapper[cata] || cata}/${image}`);
}
```

这样多累啊，聪明的 typescript 会有更好的办法：

```ts
export const ImageMapper = {
  lott: 'lott-icons',
  banks: 'banks',
};

// 就是这样
type MakeReadOnly<Type> = { readonly [key in keyof Type ]: Type[key] };
type ReadOnlyImageMapper = MakeReadOnly<typeof ImageMapper>;

export function loadImage(cata: keyof ReadOnlyImageMapper, image: string) {
  return require(`./${ImageMapper[cata] || cata}/${image}`);
}
```

这只是冰山一角，还有更多代码需要重构，有更好的实现。

完美，就是这样。
