import * as React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Layout from './layout';

export default function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Layout}/>
                <Route path="/home" component={Layout}/>
            </Switch>
        </BrowserRouter>
    );
};