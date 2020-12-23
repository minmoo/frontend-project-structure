import * as React from 'react';
import LoToolbar from './loToolbar';
import LoNavBar from './loNavbar';
import useLayoutStyle from './layoutStyle';
import { Container } from '@material-ui/core';
import { History } from 'history';
import Router, { TRoutesProps } from '../router';

type TProps = TRoutesProps & {
  history: History;
};

export default function Layout({ routes, history }: TProps): React.ReactElement {
  const classes = useLayoutStyle();

  return (
    <div className={classes.root}>
      <LoToolbar history={history} />
      <LoNavBar />
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
