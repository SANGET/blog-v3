import React from 'react';
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = ({ location, data: {
  markdownRemark: { html }
} }) => {
  return (
    <Layout location={location}>
      <SEO title="关于思行合一" />
      <div className="markdown-body">
        <div className="about-page" dangerouslySetInnerHTML={{ __html: html }} ></div>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const queryAbout = graphql`
  query queryAbout {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fileAbsolutePath: {regex: "\/about/"}) {
      html
    }
  }
`;