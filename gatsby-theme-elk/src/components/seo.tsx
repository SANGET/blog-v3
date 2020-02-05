/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  keywords?: string[];
  meta?: {}[];
  resources?: ({
    type: string;
    rel: string;
    url: string;
  })[];
}

function SEO({
  description, lang, meta, title, resources,
  keywords
}: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=2',
        },
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: keywords?.join(',')
        }
      ].concat(meta)}>
      {
        Array.isArray(resources) && resources.map((resource, idx) => {
          switch (resource.type) {
            case 'link':
              return (
                <link key={idx}
                  type={resource.rel || 'text/css'}
                  rel="stylesheet"
                  href={resource.url} />
              );
            default:
              break;
          }
        })
      }
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

export default SEO;
