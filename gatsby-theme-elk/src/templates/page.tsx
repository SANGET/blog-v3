import React, { useEffect, useMemo, useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { VisitBlog } from '../blog-helper/api';
import { SessionCache } from '../blog-helper/cache';

const PageLayout = ({
  location, data: {
    markdownRemark: {
      html,
      frontmatter: {
        title: pageTitle
      }
    },
  },
}) => {
  const visitorAndLikeDetailCache = useMemo(() => {
    return new SessionCache('pageVisitor', true);
  }, pageTitle);
  const [visitorCount, setVisitorCount] = useState(visitorAndLikeDetailCache.getItem(pageTitle));
  useEffect(() => {
    VisitBlog(pageTitle)
      .then((res) => {
        visitorAndLikeDetailCache.setItem(pageTitle, res);
        setVisitorCount(res);
      })
      .catch((err) => {
      });
  }, []);
  return (
    <Layout location={location}>
      <SEO
        title={pageTitle}
      />
      <div className="markdown-body">
        <div
          className="about-page"
          dangerouslySetInnerHTML={{ __html: html }} ></div>
      </div>
      <div className="no-print page-visitor">
        visitors {visitorCount && visitorCount.counter[0]}
      </div>
    </Layout>
  );
};

export default PageLayout;

export const queryAbout = graphql`
  query PageQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        tags
      }
    }
  }
`;
