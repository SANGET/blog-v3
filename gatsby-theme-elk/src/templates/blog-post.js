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

    return (
      <Layout
        loadResources={(
          <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css@3.0.1/github-markdown.min.css"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism.css"></link>
            <script src="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/prism.min.js"></script>
          </>
        )}
        location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}/>
        <article className="post-detail">
          <header className="post-header">
            <h1>
              {post.frontmatter.title}
            </h1>
            <div className="subcontent">
              <TimeTip date={post.frontmatter.date} readTime={readTime} className="time-helper" />
              <span className="flex"></span>
              <Tags tags={post.frontmatter.tags} />
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;
