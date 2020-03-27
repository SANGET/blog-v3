import React, { useEffect, useState } from 'react';

import { Container } from '@deer-ui/core/container';
import { graphql, useStaticQuery } from 'gatsby';
import { Loading } from '@deer-ui/core/loading';

import Footer from './footer';
import Header from './header';
import Scripts from './scripts';
import { usePageLoading } from './utils';
// import { setRequest } from '../blog-helper/api';

const Layout = (props) => {
  const { children, ...other } = props;
  // const loading = usePageLoading();
  useEffect(() => {
    const rootWrapper = document.querySelector('#wrapper');
    if (rootWrapper) rootWrapper.classList.add('ready');
  }, []);
  return (
    <div id="wrapper" className={'wrapper'}>
      <Header {...other} />
      {/* <div className="wrapper-loading-tip">
        <Loading inrow loading={loading} />
      </div> */}
      <Container className="main">{children}</Container>
      <Footer {...other} />
      <Scripts />
    </div>
  );
};

export default Layout;
