import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from '@deer-ui/core/icon';
import { Grid } from '@deer-ui/core/grid';
import { ToolTip } from '@deer-ui/core/tooltip';
import { Container } from '@deer-ui/core/container';
import { ShowModal } from '@deer-ui/core/modal';

import { getClientFingerprint } from '../utils/get-fingerprint';

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
    <footer className="footer no-print">
      <Container>
        <Grid container>
          <span>©{since ? `${since} - ` : ''}{new Date().getFullYear()} {title}</span>
          <span className="flex"></span>
          {
            github && (
              <ToolTip title="Github">
                <a href={github}
                  rel="noopener noreferrer" target="_blank">
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
          <ToolTip
            n="fingerprint"
            title="fingerprint"
            onClick={async (e) => {
              const fp = await getClientFingerprint();
              ShowModal({
                title: 'Fingerprint',
                children: () => (
                  <div className="p10">
                    {fp}
                  </div>
                )
              });
            }} />
        </Grid>
        {
          showBuildInfo && (
            <>
              <hr />
              <Grid container>
                <span>Build with </span>
                <a href="https://www.gatsbyjs.org/"
                  rel="noopener noreferrer"
                  className="ms5" target="_blank">gatsby</a>
                <a href="https://github.com/SANGET/gatsby-theme-elk"
                  rel="noopener noreferrer"
                  className="ms5" target="_blank">gatsby-theme-elk</a>
                <a href="https://ui.thinkmore.xyz"
                  rel="noopener noreferrer"
                  className="ms5" target="_blank">@deer-ui</a>
              </Grid>
            </>
          )
        }
      </Container>
    </footer>
  );
};

export default Footer;
