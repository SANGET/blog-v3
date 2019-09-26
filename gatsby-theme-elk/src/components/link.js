import React from 'react';
import { Link, graphql, navigate } from 'gatsby';
import { Call, EventEmitter } from 'basic-helper';

import { LINK_TO_PAGE } from '../../utils/const';

const CusLink = ({ onClick, ...props }) => {
  return (
    <Link {...props} onClick={e => {
      Call(onClick, e);
      EventEmitter.emit(LINK_TO_PAGE);
    }} />
  );
};

export default CusLink;
