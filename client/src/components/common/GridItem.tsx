import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, GridProps } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {},
  }),
);

export default function GridItem(props: GridProps) {
  const { children, ...rest } = props;
  const classes = useStyles();
  return (
    <Grid item={true} className={classes.grid} {...rest}>
      {children}
    </Grid>
  );
}
