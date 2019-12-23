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
    <link key="1" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.3.1/css/all.min.css" />,
    <link key="2" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css@3.0.1/github-markdown.min.css"></link>,

    // <script key="3" src="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/prism.min.js" defer></script>,
    <link key="4" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism.css"></link>,

    <script key="5" src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js" defer></script>,

    <script key="6" src="https://cdn.jsdelivr.net/gh/stylehatch/photoset-grid@master/jquery.photoset-grid.min.js" defer></script>,
  ]);
};

export const wrapPageElement = ({ element, props }) => {
// exports.wrapPageElement = ({ element, props }) => {
  return (
    <Wrapper props={props}>{element}</Wrapper>
  );
};
