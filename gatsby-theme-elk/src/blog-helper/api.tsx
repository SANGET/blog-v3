/**
 * BlogHelper apis
 */

import { RequestClass, RequestConfig } from '@mini-code/request';
import { getClientFingerprint } from '../utils/get-fingerprint';
import { SessionCache } from './cache';

export interface Counter {
  counter: number[];
  detail?: {};
}

interface CounterStruct {
  data: Counter;
}

const $R = new RequestClass();

export const setRequest = (config: RequestConfig) => {
  $R.setConfig(config);
};

let setHeader = false;
/**
 * 将 fingerprint 设置到 request header 之中
 */
const setFPHeader = async (data) => {
  if (!setHeader) {
    const fingerprint = await getClientFingerprint();
    $R.setConfig({
      commonHeaders: {
        // 浏览器指纹
        FP: fingerprint,
      }
    });
    setHeader = true;
  }
  return data;
};

$R.useBefore(setFPHeader);

let LikeCache;
/**
 * 喜欢博客，暂时只有喜欢，没有取消
 */
export const LikeBlog = async (blogTitle: string) => {
  if (!LikeCache) LikeCache = new SessionCache('LikeCache');
  const hasLiked = LikeCache.getItem(blogTitle);
  if (hasLiked) {
    return {
      message: 'visited'
    };
  }
  const res = await $R.get({
    url: '/like',
    params: { blogTitle }
  });

  LikeCache.setItem(blogTitle, 'true');

  return res.data;
};

/**
 * 通过 title 获取博客的喜欢数
 */
export const GetLikeByTitles = async (blogTitles: string[], isReturnDetail = false) => {
  const res = await $R.post<CounterStruct>({
    url: '/likes',
    data: {
      blogTitles,
      detail: isReturnDetail
    }
  });

  return res.data;
};

let VisitCache;
/**
 * 访问博客
 */
export const VisitBlog = async (blogTitle: string) => {
  if (!VisitCache) VisitCache = new SessionCache('VisitCache');
  const hasVisited = VisitCache.getItem(blogTitle);
  // if (hasVisited) {
  //   return {
  //     message: 'visited'
  //   };
  // }
  const res = await $R.get({
    url: '/visit',
    params: { blogTitle }
  });

  VisitCache.setItem(blogTitle, 'true');

  return res.data;
};

/**
 * 通过 title 获取博客的访客数
 */
export const GetVisitorsByTitles = async (blogTitles: string[]) => {
  const res = await $R.post<CounterStruct>({
    url: '/visitors',
    data: { blogTitles }
  });

  return res.data;
};
