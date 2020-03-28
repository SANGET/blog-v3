import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SideDesc from './site-desc';

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
    <SideDesc desc={title} subDesc={description} />
    // <blockquote>{title} <span className="mr10"></span> {description}</blockquote>
  );
  // return (
  //   <div className="bio">
  //     <div className="desc">
  //       <div className="name">{title}</div>
  //       <div className="c">{description}</div>
  //     </div>
  //   </div>
  // );
};

export default Bio;
