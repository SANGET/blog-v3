import React from 'react';
import { graphql, navigate } from 'gatsby';
import { Pagination } from '@deer-ui/core/pagination';

import { ToolTip } from '@deer-ui/core/tooltip';
import SEO from '../components/seo';
import Bio from '../components/bio';
import Layout from '../components/layout';
import TimeTip from '../components/time-tip';
import TagsList from '../components/tags-list';
import Tags from '../components/tags-render';
import CounterTip from '../components/counter-tip';
import Link from '../components/link';
import { CommonPageProps } from '../utils/types';
import {
  GetVisitorsByTitles, VisitBlog, GetLikeByTitles
} from '../blog-helper/api';
import { iconMap } from '../utils/constants';

// import calculateReadTime from '../../utils/calc-read-time';

interface BlogListProps extends CommonPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        blogHelperOptions: {
          apiUrl: string;
          enabledLike: boolean;
          enabledVisitor: boolean;
        };
      };
    };
    allMarkdownRemark: {
      edges: ({
        node: {
          excerpt;
          fields: {
            slug;
          };
          frontmatter: {
            date;
            title: string;
            description;
          };
        };
      })[];
    };
  };
}

const getAllBlogTitles = (posts: BlogListProps['data']['allMarkdownRemark']['edges']) => {
  const res: any[] = [];
  posts.forEach((item) => {
    res.push(item.node.frontmatter.title);
  });
  return res;
};

class BlogList extends React.Component<BlogListProps> {
  blogHelperOptions

  state = {
    visitorList: [],
    likeList: [],
  }

  constructor(props) {
    super(props);

    this.blogHelperOptions = props.data.site.siteMetadata.blogHelperOptions;
  }

  componentDidMount() {
    this.initBlogVisitorsData();
  }

  initBlogVisitorsData = () => {
    const { data } = this.props;
    const { blogHelperOptions } = this;
    if (blogHelperOptions) {
      const { enabledLike, enabledVisitor } = blogHelperOptions;
      const titles = getAllBlogTitles(data.allMarkdownRemark.edges);
      const getDataQueue = [
        enabledVisitor && GetVisitorsByTitles(titles),
        enabledLike && GetLikeByTitles(titles)
      ];
      Promise.all(getDataQueue)
        .then(([visitors, likes]) => {
          this.setState({
            visitorList: visitors.counter,
            likeList: likes.counter
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  visitBlog = (slug, title) => {
    const nextPageUrl = `/${slug}/`.replace(/\/+$/gi, '/');
    navigate(nextPageUrl);
  }

  renderVisit = () => {
    
  }

  // handleScroll = (e) => {
  //   console.log(e);
  // }
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    /** blogHelper */
    const { enabledLike, enabledVisitor } = this.blogHelperOptions;
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
        <div className="post-wrapper">
          <section className="post-list">
            {
              posts.map(({ node }, idx) => {
                const { slug } = node.fields;
                const title = node.frontmatter.title || slug;
                const { description, date, tags } = node.frontmatter;

                /** blogHelper */
                const currVisit = enabledVisitor ? visitorList[idx] : 0;
                const currLike = enabledLike ? likeList[idx] : 0;
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
                          <ToolTip
                            {...iconMap.visit}
                            className="mr10"
                            title="Visitor">
                            <span className="ps10">
                              {currVisit}
                            </span>
                          </ToolTip>
                          // <CounterTip n="tripadvisor" s="b" count={currVisit} />
                        )
                      }
                      {
                        enabledLike && (
                          <ToolTip
                            className="mr10"
                            {...iconMap.like(false)}
                            title="Likes">
                            <span className="ps10">
                              {currLike}
                            </span>
                          </ToolTip>
                          // <CounterTip n="thumbs-up" s="r" count={currLike} />
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
