import React from 'react';
import { Icon } from '@deer-ui/core/icon';

const TimeTip = ({ date, readTime = '', ...other }) => (
  <div {...other}>
    <time className="time">
      <Icon n="clock" s="r" classNames={['mr5']} />
      {date}
    </time>
    <span className="read-time ml20">
      {/* <Icon n="eye" s="r" classNames={['mr5']} /> */}
      {readTime ? `${readTime} min read` : null}
    </span>
  </div>
);

export default TimeTip;
