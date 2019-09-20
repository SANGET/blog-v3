import React from "react";
import PropTypes from "prop-types";
// Utilities
import kebabCase from "lodash/kebabCase";
// Components
import { Link, graphql } from "gatsby";
import Layout from '../components/layout';
import SEO from "../components/seo";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location
}) => {
  const allTags = group.length;
  return (
    <Layout location={location} title={title}>
      <SEO title="思行合一的文章标签" />
      <div>
        <h1>Tags</h1>
        <br/>
        <p>Total {allTags} tags</p>
        <div className="tag-cloud block-a">
          {
            group.map(tag => {
              const { fieldValue, totalCount } = tag;
              return (
                <span key={fieldValue} className="mr15" style={{
                  fontSize: `${15 + totalCount}px`
                }}>
                  <Link to={`/tags/${kebabCase(fieldValue)}/`}>
                    {fieldValue} ({totalCount})
                  </Link>
                </span>
              );
            })
          }
        </div>
      </div>
    </Layout>
  );
};

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
