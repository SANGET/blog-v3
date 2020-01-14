import React from 'react';
import { graphql, navigate } from 'gatsby';
import { Pagination } from '@deer-ui/core/pagination';

import SEO from '../components/seo';
import Bio from '../components/bio';
import Layout from '../components/layout';
import TimeTip from '../components/time-tip';
import TagsList from '../components/tags-list';
import Tags from '../components/tags-render';
import CounterTip from '../components/counter-tip';
import Link from '../components/link';

// import calculateReadTime from '../../utils/calc-read-time';

const getAllBlogTitles = (posts) => {
  const res = [];
  posts.forEach((item) => {
    res.push(item.node.frontmatter.title);
  });
  return res;
};

class BlogList extends React.Component {
  state = {
    visitorList: [],
    likeList: [],
  }

  componentDidMount() {
    const { data, loading } = this.props;
    const { blogHelperOptions } = data.site.siteMetadata;
    if (blogHelperOptions) {
      const { apiUrl } = blogHelperOptions;
      fetch(`${apiUrl}/visitors`, {
        method: 'POST',
        body: JSON.stringify({
          blogTitles: getAllBlogTitles(data.allMarkdownRemark.edges),
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          this.setState({
            visitorList: res,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  visitBlog = (slug, title) => {
    navigate(`/${slug}`);
    const { data, loading } = this.props;
    const { blogHelperOptions } = data.site.siteMetadata;
    if (blogHelperOptions) {
      const { apiUrl } = blogHelperOptions;

      fetch(`${apiUrl}/visit?blogTitle=${title}`, {
        method: 'GET',
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  // handleScroll = (e) => {
  //   console.log(e);
  // }
  render() {
    const { data, loading } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    /** blogHelper */
    const { blogHelperOptions } = data.site.siteMetadata;
    const { enabledLike, enabledVisitor } = blogHelperOptions;
    const { visitorList, likeList } = this.state;

    const {
      currentPage, limit, totalPosts, tags,
    } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={['blog', 'gatsby', 'javascript', 'react']}/>
        <Bio />
        {/* <Loading inrow loading /> */}
        <div className="post-wrapper">
          <section className="post-list">
            {
              posts.map(({ node }, idx) => {
                const { slug } = node.fields;
                const title = node.frontmatter.title || slug;
                const { description, date, tags } = node.frontmatter;

                /** blogHelper */
                const currVisit = visitorList[idx];
                const currLike = likeList[idx];
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
                      onClick={(e) => {
                        this.visitBlog(slug, title);
                      }}>
                      <h4 className="post-title">
                        <Link style={{ boxShadow: 'none' }} to={slug}>
                          {title}
                        </Link>
                      </h4>
                      <p className="post-desc" dangerouslySetInnerHTML={{ __html: description || node.excerpt }} />
                    </div>
                    <div className="subcontent">
                      <TimeTip date={date} className="time-helper" />
                      {
                        enabledVisitor && (
                          <CounterTip n="tripadvisor" s="b" count={currVisit} />
                        )
                      }
                      {
                        enabledLike && (
                          <CounterTip n="thumbs-up" s="r" count={currLike} />
                        )
                      }
                      {/* <span className="flex"></span>
                      <Tags tags={tags} /> */}
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
            active: true,
          }}
          onPagin={(nextPagin) => {
            // console.log(nextPagin);
            const nextPageIdx = nextPagin.pIdx + 1;
            navigate(`/${nextPageIdx === 1 ? '' : nextPageIdx}`);
          }} />
      </Layout>
    );
  }
}

export default BlogList;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        blogHelperOptions {
          enabledLike
          enabledVisitor
          apiUrl
        }
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
            # tags
            description
          }
        }
      }
    }
  }
`;
