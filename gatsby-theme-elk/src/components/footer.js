import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from '@deer-ui/core/icon';
import { Grid } from '@deer-ui/core/grid';
import { ToolTip } from '@deer-ui/core/tooltip';

const Footer = ({ title }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
          title
          description
          siteUrl
          footer {
            showBuildInfo
            since
          }
          social {
            github
            mail
          }
        }
      }
    }
  `);
  const { siteMetadata } = data.site;
  const footerData = siteMetadata.footer;
  const { github, mail } = siteMetadata.social;
  const { showBuildInfo = true, since } = footerData;
  return (
    <footer className="footer">
      <div className="container">
        <Grid container>
          <span>© {since ? `${since} - ` : ''}{new Date().getFullYear()} {title}</span>
          {
            showBuildInfo && (
              <>
                <span className="ml5">build with </span>
                <a href="https://www.gatsbyjs.org/"
                  rel="noopener noreferrer"
                  className="ms5" target="_blank">Gatsby</a>
                <a href="https://github.com/SANGET/gatsby-theme-elk"
                  rel="noopener noreferrer"
                  className="ms5" target="_blank">Gatsby-Theme-Elk</a>
                <a href="https://ui.thinkmore.xyz"
                  rel="noopener noreferrer"
                  className="ms5" target="_blank">@deer-ui</a>
              </>
            )
          }
          <span className="flex"></span>
          {
            github && (
              <ToolTip title="Github">
                <a href={github}
                  rel="noopener noreferrer"
                  className="ms5" target="_blank">
                  <Icon n="github" s="b" />
                </a>
              </ToolTip>
            )
          }
          {
            mail && (
              <ToolTip title={mail}>
                <a href={`mailto:${mail}`} target="_top">
                  <Icon n="envelope" s="r" />
                </a>
              </ToolTip>
            )
          }
        </Grid>
        <div className="contact">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
