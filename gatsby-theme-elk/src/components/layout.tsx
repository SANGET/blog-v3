import React, { useEffect } from 'react';

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
    const { apiUrl } = data.site.siteMetadata.blogHelperOptions;
    setRequest({
      baseUrl: apiUrl,
    });
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
