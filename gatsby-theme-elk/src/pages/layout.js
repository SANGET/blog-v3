import React from "react";
import Layout from '../components/layout';
import { Link, graphql } from "gatsby";

const PageLayout = ({ children, data: {
  site: { siteMetadata: { title } }
}, location, ...other }) => {
  return (
    <Layout {...other} title={title} location={location}>
      {children}
    </Layout>
  );
};

export default PageLayout;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;