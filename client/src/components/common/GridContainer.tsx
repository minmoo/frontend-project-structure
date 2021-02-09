import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, GridProps } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      width: 'unset', //상속값이 있으면 상속값 없으면 초기값 사용
    },
  }),
);

export default function GridContainer(props: GridProps) {
  const { children, ...rest } = props;
  const classes = useStyles();
  return (
    <Grid container={true} className={classes.grid} {...rest}>
      {children}
    </Grid>
  );
}
