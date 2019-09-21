/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

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
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social, title } = data.site.siteMetadata;
  return (
    <div className="bio">
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{
          borderRadius: `50%`,
        }}/>
      <div className="desc">
        <h4 className="name">{title}</h4>
        <div className="c">思考、分享技术的价值</div>
      </div>
    </div>
  );
};

export default Bio;
