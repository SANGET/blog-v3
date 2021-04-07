import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Icon } from "@deer-ui/core/icon";
import { Tooltip } from "react-tippy";
import { ShowModal } from "@deer-ui/core/modal";

import { getClientFingerprint } from "../utils/get-fingerprint";

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
      <div className="social p20">
        {github && (
          <Tooltip title="Github">
            <a href={github} rel="noopener noreferrer" target="_blank">
              <Icon n="github" s="b" />
            </a>
          </Tooltip>
        )}
        {mail && (
          <Tooltip title={mail}>
            <a href={`mailto:${mail}`} target="_top">
              <Icon n="envelope" s="r" />
            </a>
          </Tooltip>
        )}
        <Tooltip title="fingerprint">
          <Icon
            n="fingerprint"
            onClick={async (e) => {
              const fp = await getClientFingerprint();
              ShowModal({
                title: "Your Browser's Fingerprint",
                clickBgToClose: true,
                needMaxBtn: false,
                needMinBtn: false,
                marginTop: "30%",
                children: () => <div className="p20">{fp}</div>,
              });
            }}
          />
        </Tooltip>
      </div>

      {/* {showBuildInfo && (
        <div className="build-info p20">
          <span>Build with </span>
          <div>
            <a
              href="https://www.gatsbyjs.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              gatsby
            </a>
          </div>
          <div>
            <a
              href="https://github.com/SANGET/gatsby-theme-elk"
              rel="noopener noreferrer"
              target="_blank"
            >
              gatsby-theme-elk
            </a>
          </div>
          <div>
            <a
              href="https://ui.thinkmore.xyz"
              rel="noopener noreferrer"
              target="_blank"
            >
              @deer-ui
            </a>
          </div>
        </div>
      )} */}
      <div className="p20">
        <span>
          ©{since ? `${since} - ` : ""}
          {new Date().getFullYear()} {title}
        </span>
      </div>
      {/* <Container>
        <Grid container>
          <span className="flex"></span>
        </Grid>
      </Container> */}
    </footer>
  );
};

export default Footer;
