import * as React from 'react';
import { Router } from 'react-router-dom';
import CustomRouter from './configs/router';
import { routes } from './configs/router/config';
import { customHistory } from './configs/store/ConfigureStore';
import { Helmet } from 'react-helmet-async';

export default function App(): React.ReactElement {
  return (
    //<BrowserRouter>는 외부에서 push하면 url만 바뀌고 rendering되지 않는다.
    <Router history={customHistory}>
      {/* <Switch>
				<Route path="/" exact={true} component={Layout}/>
				<Route path="/home" component={Layout}/>
				<Route path="/signIn" component={SignIn}/>
				<Route path="/signUp" component={SignUp}/>
			</Switch> */}
      <Helmet>
        <title>TEST Title</title>
      </Helmet>
      <CustomRouter routes={routes} />
    </Router>
  );
}
