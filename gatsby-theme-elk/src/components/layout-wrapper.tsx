import React, { useEffect, useState, useRef } from 'react';

import { Loading } from '@deer-ui/core/loading';
import { Call, EventEmitter } from '@mini-code/base-func';
import { queryIsMobile } from '@deer-ui/core/utils';
import { useStaticQuery, graphql } from 'gatsby';

import { LINK_TO_PAGE } from '../../utils/const';
import { setRequest } from '../blog-helper/api';

import '../style/index.scss';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const isMobile2 = queryIsMobile();
    setIsMobile(isMobile2);
  }, []);

  return isMobile;
};

const useAPI = (blogHelperOptions) => {
  useEffect(() => {
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
};

const usePageLoading = () => {
  const [loading, setLoading] = React.useState(false);

  const prevHref = useRef('');
  /** 设置加载和判断是否移动设备 */
  React.useEffect(() => {
    const currHref = window.location.href;
    if (prevHref.current !== currHref) {
      setLoading(false);
      prevHref.current = currHref;
    }
    const handleLinkToPage = (to) => {
      if (to !== currHref) {
        setLoading(true);
      }
    };
    EventEmitter.on(LINK_TO_PAGE, handleLinkToPage);
    return () => {
      EventEmitter.rm(LINK_TO_PAGE, handleLinkToPage);
    };
  }, [loading, currHref]);

  return loading;
};

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

  useAPI(data.site.siteMetadata.blogHelperOptions);

  const loading = usePageLoading();

  /** 删除 loading 背景 */
  React.useEffect(() => {
    const loadingDOM = document.querySelector('#loadingBg');
    if (loadingDOM) document.body.removeChild(loadingDOM);
    window.Sentry?.init({ dsn: 'https://82e677b839d04307ac5ce8099381c1a9@sentry.io/5170362' });
    // myUndefinedFunction();
  }, []);

  const isMobile = useIsMobile();

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
