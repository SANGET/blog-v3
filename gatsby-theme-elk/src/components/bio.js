import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          title
          description
        }
      }
    }
  `);

  const { title, description } = data.site.siteMetadata;
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
