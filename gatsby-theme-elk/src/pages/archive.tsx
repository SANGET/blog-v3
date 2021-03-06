import React from "react";
import { graphql } from "gatsby";
import { Grid } from "@deer-ui/core/grid";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from "../components/link";
import SideDesc from "../components/site-desc";
// import Tags from '../components/tags-render';

const ArchivePage = (props) => {
  const { data, location } = props;
  const posts = data.allMarkdownRemark.edges;
  const sideTitle = data.site.siteMetadata.title;
  let perYear;
  return (
    <Layout location={location} title={sideTitle}>
      <SEO title="Archive" />
      <div>
        <SideDesc desc={`TOTAL ${posts.length} POSTS`} />
        {/* <h3>Total {posts.length} posts</h3> */}
        <div className="archive-page">
          {posts.map(({ node }) => {
            const { fields, frontmatter } = node;
            const { date, tags } = frontmatter;
            const { slug } = fields;
            const title = frontmatter.title || slug;
            const currYear = date.split(", ")[1];
            let yearTip;
            if (perYear !== currYear) {
              yearTip = <h3 className="archive-year">@{currYear}</h3>;
              perYear = currYear;
            }
            return (
              <div key={slug} className="archive-item">
                {yearTip}
                <div className="item">
                  <Link to={slug}>
                    {title} - <span className="date">{date}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ArchivePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog-posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            # tags
          }
        }
      }
    }
  }
`;
