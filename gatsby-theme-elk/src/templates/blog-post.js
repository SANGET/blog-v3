import React from "react";
import { Link, graphql } from "gatsby";
import { Icon } from 'ukelli-ui/core/icon';
import Tether from 'tether';

// import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TimeTip from '../components/time-tip';
import Tags from '../components/tags-render';

const BackToTop = () => {
  return (
    <span className="back-to-top" onClick={e => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }}>
      <Icon n="chevron-up" />
    </span>
  );
};

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    const _needTOC = this.needTOCFilter();
    if(!_needTOC) return;
    setTimeout(() => {
      this.setTOC();
      this.setScrollHighlight();
    }, 100);
  }
  needTOCFilter = () => {
    const { data, isMobile } = this.props;
    const { tableOfContents } = data.markdownRemark;
    let { needTOC } = data.markdownRemark.frontmatter;
    if(needTOC == null) needTOC = true;
    const _needTOC = !isMobile 
      && !!tableOfContents 
      && !!needTOC;
    return _needTOC;
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
          pin: true
        }
      ]
    });
  }
  handleScroll = () => {
    const { $, $window, targets, $PostTOCWrapper } = this;
    targets.each((idx, target) => {
      if($window.scrollTop() >= $(target).offset().top) {
        var id = $(target).attr('id');
        $('li a', $PostTOCWrapper).removeClass('active');
        $(`li a[href]`, $PostTOCWrapper)
          .filter(function() {
            return this.href.match(encodeURI(id));
          })
          .addClass('active');
      }
    });
  }
  setScrollHighlight = () => {
    const $ = window.$;
    if(!$) return;
    this.$ = $;
    this.$PostTOCWrapper = $('#PostTOCWrapper');
    if(!this.$PostTOCWrapper) return;
    this.targets = $('h2[id]');
    this.$window = $(window);
    this.$window.on('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    this.destory();
  }
  destory = () => {
    if(this._tetherEntity) {
      this._tetherEntity.destroy();
      this._tetherEntity.element.remove();
      this.$window.off('scroll', this.handleScroll);
    }
  }
  render() {
    const { data, pageContext, location } = this.props;
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;
    const { previous, next, readTime } = pageContext;
    const { title, description, date, tags } = post.frontmatter;
    const { tableOfContents } = post;
    const _needTOC = this.needTOCFilter();

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
              <span className="flex"></span>
              <Tags tags={tags} />
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
              ref={e => {
                if(e) {
                  if(e) e.classList.add('ready');
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
