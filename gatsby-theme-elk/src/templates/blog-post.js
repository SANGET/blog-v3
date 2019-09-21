import React from "react";
import { Link, graphql } from "gatsby";
import { Icon } from 'ukelli-ui/core/icon';

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TimeTip from '../components/time-tip';
import Tags from '../components/tags-render';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next, readTime } = this.props.pageContext;
    const { title, description, date, tags } = post.frontmatter;
    const { tableOfContents } = post;

    return (
      <Layout
        location={this.props.location} title={siteTitle}>
        <SEO
          title={title}
          description={description || post.excerpt}/>
        <div className="post-toc-wrapper block-a">
          <div className="title">Table of Contents</div>
          <div className="post-toc" dangerouslySetInnerHTML={{ __html: tableOfContents }} ></div>
        </div>
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
        tags
      }
    }
  }
`;
