import React, { useEffect, useState } from 'react';

import { Container } from '@deer-ui/core/container';
import { graphql, useStaticQuery } from 'gatsby';

import Footer from './footer';
import Header from './header';
import Scripts from './scripts';
import { setRequest } from '../blog-helper/api';

const Layout = (props) => {
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
      });
    }
  }, []);
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
