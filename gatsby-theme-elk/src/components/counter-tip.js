import React from 'react';
import { Icon } from '@deer-ui/core/icon';
import { Grid } from '@deer-ui/core/grid';

const CounterTip = ({
  count,
  ...propsForIcon
}) => {
  return (
    <span className="counter-tip mr20">
      <Grid container alignItem="center">
        <Grid className="name">
          <Icon {...propsForIcon} />
        </Grid>
        <Grid className="c ml5">{count}</Grid>
      </Grid>
    </span>
  );
};

export default CounterTip;
