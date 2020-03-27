import React, { useEffect, useState, useRef } from 'react';

import { queryIsMobile } from '@deer-ui/core/utils';
import { useStaticQuery, graphql } from 'gatsby';
import { Loading } from '@deer-ui/core/loading';

import { setRequest } from '../blog-helper/api';
import { usePageLoading } from './utils';

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

  /** 删除 loading 背景 */
  React.useEffect(() => {
    const loadingDOM = document.querySelector('#loadingBg');
    if (loadingDOM) document.body.removeChild(loadingDOM);
    window.Sentry?.init({ dsn: 'https://82e677b839d04307ac5ce8099381c1a9@sentry.io/5170362' });
    // myUndefinedFunction();
  }, []);

  const isMobile = useIsMobile();
  const loading = usePageLoading();

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
