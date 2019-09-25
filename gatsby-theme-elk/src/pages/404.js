import React from "react";
import { graphql } from "gatsby";
import { Icon } from 'ukelli-ui/core/icon';

import Layout from "../components/layout";
import SEO from "../components/seo";

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <div className="text-center">
          {/* <Icon n="surprise" s="r" /> */}
          <div style={{fontSize: 200}}>
            404
          </div>
          <p>Not Found</p>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
