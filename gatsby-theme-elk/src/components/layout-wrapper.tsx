import React, { useEffect } from 'react';

import { Loading } from '@deer-ui/core/loading';
import { Call, EventEmitter } from '@mini-code/base-func';
import { queryIsMobile } from '@deer-ui/core/utils';
import { useStaticQuery, graphql } from 'gatsby';

import { LINK_TO_PAGE } from '../../utils/const';

import '../style/index.scss';
import { setRequest } from '../blog-helper/api';

const Wrapper = ({ children, props }) => {
  const data = useStaticQuery(graphql`
    query layoutQuery {
      site {
        siteMetadata {
          blogHelperOptions {
            enabledLike
            enabledVisitor
            apiUrl
          }
        }
      }
    }
  `);
  useEffect(() => {
    const { blogHelperOptions } = data.site.siteMetadata;
    if (blogHelperOptions) {
      const { apiUrl } = blogHelperOptions;
      setRequest({
        baseUrl: apiUrl,
        // baseUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : apiUrl,
        // baseUrl: 'https://blog-helper-api.thinkmore.xyz/prod',
        // baseUrl: 'https://lxz03fie0k.execute-api.ap-northeast-1.amazonaws.com/prod',
        // baseUrl: apiUrl,
      });
    }
  }, []);
  // const isMobile = /iPhone|Android|iOS/.test(navigator.userAgent);
  const [isMobile, setIsMobile] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  /** 删除 loading 背景 */
  React.useEffect(() => {
    const loadingDOM = document.querySelector('#loadingBg');
    if (loadingDOM) document.body.removeChild(loadingDOM);
  }, []);

  /** 设置加载和判断是否移动设备 */
  React.useEffect(() => {
    console.log(loading);
    const isMobile2 = queryIsMobile();
    setIsMobile(isMobile2);
    const currHref = window.location.href;
    const handleLinkToPage = (to) => {
      if (to !== currHref) {
        setLoading(true);
      }
    };
    EventEmitter.on(LINK_TO_PAGE, handleLinkToPage);
    setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => {
      // setLoading(true);
      EventEmitter.rm(LINK_TO_PAGE, handleLinkToPage);
      // setLoading(false);
    };
  }, [loading]);
  return (
    <div className={isMobile ? 'mobile' : 'desktop'} id="__out_wrapper">
      <div className="wrapper-loading-tip">
        <Loading inrow loading={loading} />
      </div>
      {React.cloneElement(children, {
        ...props,
        isMobile,
      })}
    </div>
  );
};

export default Wrapper;
