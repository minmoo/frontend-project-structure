import * as React from 'react';
// import LoToolbar from './loToolbar';
// import LoNavBar from './loNavbar';
import { Container } from '@material-ui/core';
import { History } from 'history';
import { useRootState } from '../../modules';
import Router, { TRoutesProps } from '../../configs/router';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '../../components/common/toolbar';
import Navbar from '../../components/common/navbar';

const useLayoutStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: {
      display: 'flex',
      ...theme.mixins.toolbar,
    },
    wrapper: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
    },
    contentContainer: {
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
    },
    content: {
      flex: '1 1 auto',
      height: '100%',
      overflow: 'auto',
      padding: theme.spacing(3),
    },
  }),
);

export default function Layout({ routes }: TRoutesProps): React.ReactElement {
  const classes = useLayoutStyles();

  return (
    <div className={classes.root}>
      <Toolbar />
      <Navbar />
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
        <Router routes={routes} />
      </main> */}

      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <div className={classes.toolbar} />
            <Router routes={routes} />
          </div>
        </div>
      </div>
    </div>
  );
}
