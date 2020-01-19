import React, { useEffect, useState } from 'react';

import { Container } from '@deer-ui/core/container';
import { graphql, useStaticQuery } from 'gatsby';

import Footer from './footer';
import Header from './header';
import Scripts from './scripts';
// import { setRequest } from '../blog-helper/api';

const Layout = (props) => {
  const { children, ...other } = props;
  return (
    <div id="wrapper" className={'wrapper'}>
      <Header {...other} />
      <Container className="main">{children}</Container>
      <Footer {...other} />
      <Scripts />
    </div>
  );
};

export default Layout;
