import React from 'react';
import { Link, graphql, navigate } from 'gatsby';
import { Pagination } from 'ukelli-ui/core/pagin';

import SEO from '../components/seo';
import Bio from '../components/bio';
import Layout from '../components/layout';
import TimeTip from '../components/time-tip';
import TagsList from '../components/tags-list';
import Tags from '../components/tags-render';

// import calculateReadTime from '../../utils/calc-read-time';

import '../style/index.scss';

class BlogIndex extends React.Component {
  componentDidMount() {
    document.body.addEventListener('scroll', this.handleScroll, {
      capture: true,
      passive: true
    });
  }
  handleScroll = (e) => {
    console.log(e);
  }
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    const { currentPage, limit, totalPosts, tags } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}/>
        <Bio />
        <div className="post-wrapper">
          <section className="post-list">
            {
              posts.map(({ node }) => {
                const slug = node.fields.slug;
                const title = node.frontmatter.title || slug;
                const { description, date, tags } = node.frontmatter;
                // const readTime = calculateReadTime(node.rawMarkdownBody);
                // const timeDOM = (
                //   <time className="time">
                //     <Icon n="clock" s="r" classNames={['mr5']} />
                //     {date}
                //   </time>
                // );
                return (
                  <div key={slug}
                    className="post-item">
                    <div
                      className="post-entity"
                      onClick={e => {
                        navigate(`/${slug}`);
                      }}>
                      <h3 className="post-title">
                        <Link style={{ boxShadow: 'none' }} to={slug}>
                          {title}
                        </Link>
                      </h3>
                      <p className="post-desc" dangerouslySetInnerHTML={{ __html: description || node.excerpt }} />
                    </div>
                    <div className="subcontent">
                      <TimeTip date={date} className="time-helper" />
                      <span className="flex"></span>
                      <Tags tags={tags} />
                    </div>
                    {/* {timeDOM}
                  <span className="read-time ml20">
                    <Icon n="eye" s="r" classNames={['mr5']} />
                    {readTime} min read
                  </span> */}
                  </div>
                );
              })
            }
          </section>
          {/* <TagsList tags={tags} /> */}
        </div>
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
      filter: { fileAbsolutePath: {regex : "\/blog-posts/"} }
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
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            description
          }
        }
      }
    }
  }
`;
