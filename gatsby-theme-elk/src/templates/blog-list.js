import React from 'react';
import { Link, graphql, navigate } from 'gatsby';
import { Pagination } from 'ukelli-ui/core/pagin';

import SEO from '../components/seo';
import Bio from '../components/bio';
import Layout from '../components/layout';

import '../style/index.scss';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    const { currentPage, numPages, limit, totalPosts } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}/>
        <Bio />
        <section className="post-list">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <div key={node.fields.slug} className="post-item">
                <h3 className="post-title">
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <p className="post-desc" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                <time className="time">{node.frontmatter.date}</time>
              </div>
            );
          })}
        </section>
        <Pagination 
          isNeedHelper={false}
          pagingInfo={{
            pIdx: currentPage - 1,
            pSize: limit,
            total: totalPosts,
            active: true
          }}
          onPagin={nextPagin => {
            // console.log(nextPagin);
            // TODO: 完善分页
            const nextPageIdx = nextPagin.pIdx + 1;
            navigate(`/${nextPageIdx === 1 ? '' : nextPageIdx}`);
          }} />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
