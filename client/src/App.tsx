import * as React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Layout from './layout';
import SignIn from './sign/SignIn';
import SignUp from './sign/SignUp';
import Router from './configs/router/Router';
import {routes} from './configs/router/config';

export default function App(){
    return (
        <BrowserRouter>
            {/* <Switch>
                <Route path="/" exact={true} component={Layout}/>
                <Route path="/home" component={Layout}/>
                <Route path="/signIn" component={SignIn}/>
                <Route path="/signUp" component={SignUp}/>
            </Switch> */}
            <Router routes={routes}/>
        </BrowserRouter>
    );
};