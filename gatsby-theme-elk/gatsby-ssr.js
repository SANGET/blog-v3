import React from 'react';
import { LoaderDOM, LoadedDOM } from './utils/loader-script';

import Wrapper from './src/components/layout-wrapper';

export const onRenderBody = ({
  setPostBodyComponents, setPreBodyComponents, setHeadComponents,
}) => {
  setPreBodyComponents([
    <LoaderDOM key="1" />,
  ]);
  setPostBodyComponents([
    <React.Fragment key="script">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.3.1/css/all.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css@3.0.1/github-markdown.min.css"></link>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism.css"></link>

      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js" defer></script>

      <script src="https://cdn.jsdelivr.net/gh/stylehatch/photoset-grid@master/jquery.photoset-grid.min.js" defer></script>
      <script src="https://cdn.jsdelivr.net/npm/medium-zoom@1.0.5/dist/medium-zoom.min.js" defer></script>

      <script id="dsq-count-scr" src="//alex-blog-1.disqus.com/count.js" async></script>

      <script src="https://browser.sentry-cdn.com/5.15.0/bundle.min.js" integrity="sha384-+ysfQckQvwCB5SppH41IScIz/Iynt2pePnJNMl+D7ZOzDJ+VYhQEuwB0pA60IDM0" crossOrigin="anonymous"></script>
      {/* <script src="https://cdn.jsdelivr.net/npm/fingerprintjs2@2.1.0/dist/fingerprint2.min.js"></script> */}
    </React.Fragment>
  ]);
};

export const wrapPageElement = ({ element, props }) => {
// exports.wrapPageElement = ({ element, props }) => {
  return (
    <Wrapper props={props}>{element}</Wrapper>
  );
};
