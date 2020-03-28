import React, { useRef } from 'react';
import {
  Link, graphql, navigate
} from 'gatsby';
import { Call, EventEmitter } from '@mini-code/base-func';
import { Children } from '@deer-ui/core/utils';

import { LINK_TO_PAGE } from '../../utils/const';


interface CusLinkProps {
  to: string;
  onClick?;
  children?: Children;
}

const CusLink = ({ onClick, to, ...props }: CusLinkProps) => {
  return (
    <Link {...props} to={to} onClick={(e) => {
      Call(onClick, e);
      EventEmitter.emit(LINK_TO_PAGE, to);
    }} />
  );
};

export default CusLink;
