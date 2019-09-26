import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from '../components/layout';
import Link from '../components/link';

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;
  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <h1>{tagHeader}</h1>
      <div className="tag-posts block-a">
        {
          edges.map(({ node }) => {
            const { slug } = node.fields;
            const { title, date } = node.frontmatter;
            return (
              <span className="item" style={{
                fontSize: '16px'
              }} key={slug}>
                <Link to={slug}>
                  {title} - <span className="date">{date}</span></Link>
              </span>
            );
          })
        }
        <span className="itm">
          <Link to="/tags">All tags</Link>
        </span>
      </div>
    </Layout>
  );
};
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};
export default Tags;
export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY, MMMM DD")
          }
        }
      }
    }
  }
`;
