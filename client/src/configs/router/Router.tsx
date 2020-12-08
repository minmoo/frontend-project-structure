import * as React from 'react';
import {Switch} from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import {TRoute} from './config';

type TProps ={
    routes: TRoute[];
}

const Router: React.FC<TProps> = ({routes}) => {
    return (
        <Switch>
            {routes && 
                routes.map((route:TRoute) => 
                    <RouteWithSubRoutes key={route.path} {...route}/>)
            }
        </Switch>
    )
};

export default Router;