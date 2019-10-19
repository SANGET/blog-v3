// custom typefaces
import React from 'react';

import Wrapper from './src/components/layout-wrapper';

export const wrapPageElement = ({ element, props }) => {
// exports.wrapPageElement = ({ element, props }) => {
  return (
    <Wrapper props={props}>{element}</Wrapper>
  );
};
