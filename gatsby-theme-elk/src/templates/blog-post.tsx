import React from "react";
import { graphql } from "gatsby";
import { DebounceClass } from "@mini-code/base-func";
import { Icon } from "@deer-ui/core/icon";
import Tether from "tether";
// import TetherComponent from "react-tether";

// import Bio from "../components/bio";
import { ToolTip } from "@deer-ui/core/tooltip";
import { Grid } from "@deer-ui/core/grid";
import { Spinning } from "@deer-ui/core/loading";
import Layout from "../components/layout";
import Comment from "../components/comment";
import SEO from "../components/seo";
import TimeTip from "../components/time-tip";
import Tags from "../components/tags-render";
import Link from "../components/link";
// import {
//   GetVisitorsByTitles, GetLikeByTitles, LikeBlog, VisitBlog, Counter
// } from '../blog-helper/api';
import { iconMap } from "../utils/constants";
import { SessionCache } from "../blog-helper/cache";
import {
  GetLikeByTitles,
  VisitBlog,
  LikeBlog,
  Counter,
} from "../blog-helper/api";

interface BlogPostProps {
  data: any;
}

const delayExec = new DebounceClass().exec;

const BackToTop = () => (
  <span
    className="back-to-top"
    onClick={(e) => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }}
  >
    <Icon n="chevron-up" />
  </span>
);

class BlogPostTemplate extends React.Component<
  BlogPostProps,
  {
    currVisit: Counter | null;
    currLike: Counter | null;
    liking: boolean;
  }
> {
  $;

  $window;

  targets;

  $PostTOCWrapper;

  _tetherEntity;

  blogHelperOptions;

  visitorAndLikeDetailCache;

  constructor(props) {
    super(props);

    this.blogHelperOptions = props.data.site.siteMetadata.blogHelperOptions;

    this.state = {
      currVisit: null,
      currLike: null,
      liking: false,
    };
  }

  componentDidMount() {
    if (!this.visitorAndLikeDetailCache) {
      this.visitorAndLikeDetailCache = new SessionCache(
        "visitorAndLikeDetailCache",
        true
      );
    }
    const blogTitle = this.getBlogTitle();

    this.setState({
      currVisit: this.visitorAndLikeDetailCache.getItem(
        `${blogTitle}_currVisit`
      ),
      currLike: this.visitorAndLikeDetailCache.getItem(`${blogTitle}_currLike`),
    });

    setTimeout(() => {
      this.setupTOC();
    }, 100);
    this.initBlogData();
  }

  getBlogTitle = () => this.props.data.markdownRemark.frontmatter.title;

  initBlogData = async () => {
    const blogTitle = this.getBlogTitle();
    const visitResData = await this.visitBlog(blogTitle);
    setTimeout(() => {
      const { enabledLike, enabledVisitor } = this.blogHelperOptions;
      const getDataQueue = [
        // enabledVisitor && GetVisitorsByTitles([blogTitle]),
        enabledLike && GetLikeByTitles([blogTitle], true),
      ];
      Promise.all(getDataQueue)
        .then(([like]) => {
          this.visitorAndLikeDetailCache.setItem(
            `${blogTitle}_currVisit`,
            visitResData
          );
          this.visitorAndLikeDetailCache.setItem(`${blogTitle}_currLike`, like);
          this.setState({
            currVisit: visitResData,
            currLike: like,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 100);
  };

  visitBlog = (title) => {
    return new Promise<Counter>((resolve, reject) => {
      if (this.blogHelperOptions) {
        return VisitBlog(title)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      }
      return resolve();
    });
  };

  needTOCFilter = () => {
    const { data, isMobile } = this.props;
    const { tableOfContents } = data.markdownRemark;
    let { needTOC } = data.markdownRemark.frontmatter;
    if (needTOC == null) needTOC = true;
    const _needTOC = !isMobile && !!tableOfContents && !!needTOC;
    return _needTOC;
  };

  setupTOC = () => {
    delayExec(() => {
      const _needTOC = this.needTOCFilter();
      if (!_needTOC) return;
      this.setTOC();
      this.setScrollHighlight();
    }, 100);
  };

  setTOC = () => {
    // console.log('didMount')
    this.destory();
    this._tetherEntity = new Tether({
      element: ".post-toc-wrapper",
      target: ".post-detail",
      attachment: "top left",
      targetAttachment: "top right",
      offset: "-20px -10px",
      "tether-enabled": false,
      constraints: [
        {
          to: "window",
          attachment: "together",
          pin: true,
        },
      ],
    });
  };

  handleScroll = () => {
    const { $, $window, targets, $PostTOCWrapper } = this;
    targets.each((idx, target) => {
      if ($window.scrollTop() >= $(target).offset().top) {
        const id = $(target).attr("id");
        $("li a", $PostTOCWrapper).removeClass("active");
        $("li a[href]", $PostTOCWrapper)
          // eslint-disable-next-line func-names
          .filter(function () {
            return this.href.match(encodeURI(id));
          })
          .addClass("active");
      }
    });
  };

  setScrollHighlight = () => {
    const { $ } = window;
    if (!$) return;
    this.$ = $;
    this.$PostTOCWrapper = $("#PostTOCWrapper");
    if (!this.$PostTOCWrapper) return;
    this.targets = $("h2[id]");
    this.$window = $(window);
    this.$window.on("scroll", this.handleScroll);
  };

  componentWillUnmount() {
    this.destory();
  }

  destory = () => {
    if (this._tetherEntity) {
      this._tetherEntity.destroy();
      this._tetherEntity.element.remove();
      this.$window.off("scroll", this.handleScroll);
    }
  };

  likeThisBlog = (title: string) => {
    if (this.state.liking) return;
    this.setState({
      liking: true,
    });
    LikeBlog(title)
      .then((res) => {
        this.setState({
          liking: false,
          currLike: {
            counter: res.counter,
            detail: true,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderLike = (title) => {
    if (!this.blogHelperOptions) return null;
    const { enabledLike } = this.blogHelperOptions;
    const { currLike, liking } = this.state;
    const isLiked = currLike && currLike.detail;

    return (
      enabledLike && (
        <span
          onClick={(e) => {
            !isLiked && this.likeThisBlog(title);
          }}
        >
          <ToolTip
            {...iconMap.like(isLiked)}
            className={`ml10 ${isLiked ? "t_red" : ""}`}
            title="Likes"
          >
            <span className="ps10">
              {
                // eslint-disable-next-line no-nested-ternary
                liking ? (
                  <Spinning color="black" />
                ) : currLike ? (
                  currLike.counter
                ) : (
                  <Spinning color="black" />
                )
              }
            </span>
          </ToolTip>
          {/* <CounterTip n="thumbs-up" s="r" count={currLike} /> */}
        </span>
      )
    );
  };

  renderVisitor = () => {
    if (!this.blogHelperOptions) return null;
    const { enabledVisitor } = this.blogHelperOptions;
    const { currVisit } = this.state;
    return (
      enabledVisitor && (
        <div>
          View {currVisit ? currVisit.counter : <Spinning color="black" />}
        </div>
        // <ToolTip
        //   {...iconMap.visit}
        //   title="View">
        //   <span className="ps10">
        //     {
        //       currVisit
        //         ? currVisit.counter
        //         : <Spinning color="black" />
        //     }
        //   </span>
        // </ToolTip>
      )
    );
  };

  render() {
    const { data, pageContext, location } = this.props;
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;
    const { previous, next, readTime } = pageContext;
    const {
      title,
      description,
      date,
      tags,
      photos,
      keywords,
    } = post.frontmatter;
    const { tableOfContents } = post;
    const _needTOC = this.needTOCFilter();

    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title={title}
          description={description || post.excerpt}
          keywords={keywords}
        />
        <article className="post-detail">
          <div
            className={"back-btn"}
            onClick={(e) => {
              history.back();
            }}
          >
            <Icon n="chevron-left" className="mr10" />
            BACK
          </div>
          <header className="post-header">
            <div className="post-title">{title}</div>
            <Grid container wrap="wrap" className="subcontent">
              <TimeTip
                date={date}
                readTime={readTime}
                className="time-helper"
              />
              {/* <span className="flex"></span> */}
              <Tags tags={tags} />
              <span className="flex"></span>
              {this.renderVisitor()}
              {this.renderLike(title)}
            </Grid>
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
                  <Icon n="angle-left" classNames={["mr10"]} />
                  {previous.frontmatter.title}
                </Link>
              )}
            </div>
            <div>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title}
                  <Icon n="angle-right" classNames={["ml10"]} />
                </Link>
              )}
            </div>
          </div>
        </nav>

        <Comment />

        <BackToTop />
        {_needTOC && (
          // <TetherComponent attachment="top center" />
          <div
            id="PostTOCWrapper"
            className="post-toc-wrapper block-a"
            ref={(e) => {
              if (e) {
                e.classList.add("ready");
                // this.setupTOC(e);
                // setTimeout(() => {
                //   this.setTOC(e);
                // }, 100);
              }
            }}
          >
            {/* <div className="title">Table of Contents</div> */}
            <div
              className="post-toc"
              dangerouslySetInnerHTML={{ __html: tableOfContents }}
            ></div>
          </div>
        )}
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
        keywords
        needTOC
        tags
      }
    }
  }
`;
