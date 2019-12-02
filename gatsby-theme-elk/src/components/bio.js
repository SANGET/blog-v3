/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          title
          description
        }
      }
    }
  `);

  const { author, title, description } = data.site.siteMetadata;
  return (
    <div className="bio">
      <div className="desc">
        <div className="name">{title}</div>
        <div className="c">{description}</div>
      </div>
    </div>
  );
};

export default Bio;
