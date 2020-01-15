import React from 'react';
import { graphql } from 'gatsby';
import { DebounceClass } from '@mini-code/base-func';
import { Icon } from '@deer-ui/core/icon';
import Tether from 'tether';

// import Bio from "../components/bio";
import { ToolTip } from '@deer-ui/core/tooltip';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TimeTip from '../components/time-tip';
import Tags from '../components/tags-render';
import Link from '../components/link';
import {
  getVisitorsByTitles, getLikeByTitles, likeBlog, visitBlog
} from '../blog-helper/api';
import CounterTip from '../components/counter-tip';

const delayExec = (new DebounceClass()).exec;

const BackToTop = () => (
  <span className="back-to-top" onClick={(e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }}>
    <Icon n="chevron-up" />
  </span>
);

class BlogPostTemplate extends React.Component<{}, {
  currVisit: number;
  currLike: number;
}> {
  $

  $window

  targets

  $PostTOCWrapper

  _tetherEntity

  state = {
    currVisit: 0,
    currLike: 0,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setupTOC();
    }, 100);
    this.initBlogData();
  }

  initBlogData = async () => {
    const siteTitle = this.props.data.markdownRemark.frontmatter.title;
    await this.visitBlog(siteTitle);
    const getDataQueue = [
      getVisitorsByTitles(siteTitle),
      getLikeByTitles(siteTitle)
    ];
    Promise.all(getDataQueue)
      .then(([visitor, like]) => {
        this.setState({
          currVisit: visitor[0],
          currLike: like[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  visitBlog = (title) => {
    return new Promise((resolve) => {
      const { data } = this.props;
      const { blogHelperOptions } = data.site.siteMetadata;
      if (blogHelperOptions) {
        visitBlog(title)
          .then((res) => {
            // console.log(res);
            resolve(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }

  needTOCFilter = () => {
    const { data, isMobile } = this.props;
    const { tableOfContents } = data.markdownRemark;
    let { needTOC } = data.markdownRemark.frontmatter;
    if (needTOC == null) needTOC = true;
    const _needTOC = !isMobile
      && !!tableOfContents
      && !!needTOC;
    return _needTOC;
  }

  setupTOC = () => {
    delayExec(() => {
      const _needTOC = this.needTOCFilter();
      if (!_needTOC) return;
      this.setTOC();
      this.setScrollHighlight();
    }, 100);
  }

  setTOC = () => {
    // console.log('didMount')
    this.destory();
    this._tetherEntity = new Tether({
      element: '.post-toc-wrapper',
      target: '.container.main',
      attachment: 'top left',
      targetAttachment: 'top right',
      offset: '-20px -10px',
      'tether-enabled': false,
      constraints: [
        {
          to: 'window',
          attachment: 'together',
          pin: true,
        },
      ],
    });
  }

  handleScroll = () => {
    const {
      $, $window, targets, $PostTOCWrapper,
    } = this;
    targets.each((idx, target) => {
      if ($window.scrollTop() >= $(target).offset().top) {
        const id = $(target).attr('id');
        $('li a', $PostTOCWrapper).removeClass('active');
        $('li a[href]', $PostTOCWrapper)
          // eslint-disable-next-line func-names
          .filter(function () {
            return this.href.match(encodeURI(id));
          })
          .addClass('active');
      }
    });
  }

  setScrollHighlight = () => {
    const { $ } = window;
    if (!$) return;
    this.$ = $;
    this.$PostTOCWrapper = $('#PostTOCWrapper');
    if (!this.$PostTOCWrapper) return;
    this.targets = $('h2[id]');
    this.$window = $(window);
    this.$window.on('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.destory();
  }

  destory = () => {
    if (this._tetherEntity) {
      this._tetherEntity.destroy();
      this._tetherEntity.element.remove();
      this.$window.off('scroll', this.handleScroll);
    }
  }

  likeThisBlog = (title: string) => {
    likeBlog(title)
      .then((res) => {
        // console.log(res);
        this.setState(({ currLike }) => ({
          currLike: currLike + 1
        }));
      })
      .catch((err) => {

      });
  }

  render() {
    const { data, pageContext, location } = this.props;
    const { blogHelperOptions } = data.site.siteMetadata;
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;
    const { previous, next, readTime } = pageContext;
    const {
      title, description, date, tags, photos,
    } = post.frontmatter;
    const { tableOfContents } = post;
    const _needTOC = this.needTOCFilter();
    const { enabledLike, enabledVisitor } = blogHelperOptions;
    const { currVisit, currLike } = this.state;

    return (
      <Layout
        location={location} title={siteTitle}>
        <SEO
          title={title}
          description={description || post.excerpt}/>
        <article className="post-detail">
          <header className="post-header">
            <h1>
              {title}
            </h1>
            <div className="subcontent">
              <TimeTip date={date} readTime={readTime} className="time-helper" />
              {/* <span className="flex"></span> */}
              <Tags tags={tags} />
              <span className="flex"></span>
              {
                enabledVisitor && (
                  <ToolTip
                    className="mr10"
                    n="tripadvisor"
                    s="b"
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
                  <span onClick={(e) => {
                    this.likeThisBlog(title);
                  }}>
                    <ToolTip
                      className="mr10"
                      n="thumbs-up"
                      s="r"
                      title="Likes">
                      <span className="ps10">
                        {currLike}
                      </span>
                    </ToolTip>
                    {/* <CounterTip n="thumbs-up" s="r" count={currLike} /> */}
                  </span>
                )
              }
            </div>
          </header>
          <div className="markdown-body">
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </article>

        <nav>
          <div className="post-shortcut-nav">
            <div>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <Icon n="angle-left" classNames={['mr10']} />
                  {previous.frontmatter.title}
                </Link>
              )}
            </div>
            <div>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title}
                  <Icon n="angle-right" classNames={['ml10']} />
                </Link>
              )}
            </div>
          </div>
        </nav>
        <BackToTop />
        {
          _needTOC && (
            <div
              id="PostTOCWrapper"
              className="post-toc-wrapper block-a"
              ref={(e) => {
                if (e) {
                  e.classList.add('ready');
                  // this.setupTOC(e);
                // setTimeout(() => {
                //   this.setTOC(e);
                // }, 100);
                }
              }}>
              <div className="title">Table of Contents</div>
              <div className="post-toc" dangerouslySetInnerHTML={{ __html: tableOfContents }} ></div>
            </div>
          )
        }
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        blogHelperOptions {
          enabledLike
          enabledVisitor
          apiUrl
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        needTOC
        tags
      }
    }
  }
`;
