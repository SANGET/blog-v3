// custom typefaces
import React from 'react';

import Wrapper from './src/components/layout-wrapper';
import * as BlogHelperAPI from './src/blog-helper/api';

export const wrapPageElement = ({ element, props }) => {
// exports.wrapPageElement = ({ element, props }) => {
  return (
    <Wrapper props={{ ...props, BlogHelperAPI }}>{element}</Wrapper>
  );
};
