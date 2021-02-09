import * as React from 'react';
// import LoToolbar from './loToolbar';
// import LoNavBar from './loNavbar';
import { Container } from '@material-ui/core';
import { History } from 'history';
import Router, { TRoutesProps } from '../../configs/router';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '../../components/common/toolbar';
import Navbar from '../../components/common/navbar';

const useLayoutStyles = makeStyles((theme: Theme) => {
  const drawerWidth = theme.spacing(30);

  return createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: theme.palette.background.default,
      },
    },
    toolBar: theme.mixins.toolbar, //content to be below app bar
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    title: {
      flexGrow: 1,
    },
  });
});

export default function Layout({ routes }: TRoutesProps): React.ReactElement {
  const classes = useLayoutStyles();

  return (
    <div className={classes.root}>
      <Toolbar />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolBar} />
        <Container maxWidth="lg" className={classes.container}>
          {/* <Route exact path="/" render={() => <div>Home page</div>}/>
                    <Route exact path="/home" render={() => <div>Home page</div>}/>
                    <Route path="/home/dashboard" render={() => <div>Dashboard page</div>}/>
                    <Route path="/home/websocket" component={Websocket}/> */}
          <Router routes={routes} />
        </Container>
      </main>
    </div>
  );
}
