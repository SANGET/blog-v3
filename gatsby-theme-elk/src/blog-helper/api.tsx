/**
 * BlogHelper apis
 */

import { RequestClass, RequestConfig } from '@mini-code/request';

const $R = new RequestClass();

export const setRequest = (config: RequestConfig) => {
  $R.setConfig(config);
};

/**
 * 喜欢博客
 */
export const likeBlog = async (blogTitle: string) => {
  const res = await $R.get({
    url: '/like',
    params: { blogTitle }
  });

  return res.data;
};

/**
 * 通过 title 获取博客的喜欢数
 */
export const getLikeByTitles = async (blogTitles: string[]) => {
  const res = await $R.post({
    url: '/likes',
    data: { blogTitles }
  });

  return res.data;
};

/**
 * 访问博客
 */
export const visitBlog = async (blogTitle: string) => {
  const res = await $R.get({
    url: '/visit',
    params: { blogTitle }
  });

  return res.data;
};

/**
 * 通过 title 获取博客的访客数
 */
export const getVisitorsByTitles = async (blogTitles: string[]) => {
  const res = await $R.post({
    url: '/visitors',
    data: { blogTitles }
  });

  return res.data;
};
