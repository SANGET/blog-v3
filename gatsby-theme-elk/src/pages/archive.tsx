import React from 'react';
import { graphql } from 'gatsby';
import { Grid } from '@deer-ui/core/grid';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Link from '../components/link';
import Tags from '../components/tags-render';

const ArchivePage = (props) => {
  const {
    data,
    location,
  } = props;
  const posts = data.allMarkdownRemark.edges;
  const sideTitle = data.site.siteMetadata.title;
  let perYear;
  return (
    <Layout location={location} title={sideTitle}>
      <SEO title={`${sideTitle}的文章标签`} />
      <div>
        <h1>Archive</h1>
        <br/>
        <p>Total {posts.length} posts</p>
        <div className="archive-page">
          {
            posts.map(({ node }) => {
              const { fields, frontmatter } = node;
              const { date, tags } = frontmatter;
              const { slug } = fields;
              const title = frontmatter.title || slug;
              const currYear = date.split(', ')[1];
              let yearTip;
              if (perYear !== currYear) {
                yearTip = (
                  <h3>@{currYear}</h3>
                );
                perYear = currYear;
              }
              return (
                <div key={slug} className="post">
                  {yearTip}
                  <Grid
                    container
                    alignItems="center"
                    className="item mb5">
                    <span className="mr10">
                      <Link to={slug}>
                        {title}
                      </Link>
                    </span>
                    <div>
                      <span className="date">{date}</span>
                      {/* <Tags tags={tags} /> */}
                    </div>
                  </Grid>
                </div>
              );
            })
          }
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
      filter: { fileAbsolutePath: {regex : "\/blog-posts/"} }
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
