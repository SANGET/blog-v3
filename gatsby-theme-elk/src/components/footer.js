import React from 'react';
import { Icon } from 'ukelli-ui/core/icon';
// import { ToolTip } from 'ukelli-ui/core/tooltip';

const Footer = ({ title }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="layout">
          <span>© {new Date().getFullYear()} {title} - build with </span>
          <a href="https://www.gatsbyjs.org/"
            rel="noopener noreferrer"
            className="ms5" target="_blank">Gatsby</a>,
          <a href="https://www.gatsbyjs.org/"
            rel="noopener noreferrer"
            className="ms5" target="_blank">Gatsby Theme Elk</a>,
          <a href="https://ui.ukelli.com"
            rel="noopener noreferrer"
            className="ms5" target="_blank">Ukelli UI</a>
          <span className="flex"></span>
          <a href="https://github.com/SANGET"
            rel="noopener noreferrer"
            className="ms5" target="_blank">
            {/* <ToolTip
              // position="right"
              n="github" s="b" title="Github" /> */}
            <Icon n="github" s="b" />
          </a>
          <a href="mailto:zh.sanget@gmail.com" target="_top">
            {/* <ToolTip
              // position="right"
              n="envelope" s="r" title="zh.sanget@gmail.com" /> */}
            <Icon n="envelope" s="r" /> zh.sanget@gmail.com
          </a>
        </div>
        <div className="contact">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
