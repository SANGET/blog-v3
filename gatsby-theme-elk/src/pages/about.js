import React from 'react';

import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="关于思行合一" />
      <div className="about">about</div>
    </Layout>
  );
};

export default AboutPage;