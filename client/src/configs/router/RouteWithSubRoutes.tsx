import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { TRoute } from './config';

const RouteWithSubRoutes = (route:TRoute) => {
    const authenticated = true; //권한체크


    return (
        <React.Suspense fallback={route.fallback}>
            <Route
                path={route.path}
                render={(props) =>
                    route.redirect? <Redirect to={route.redirect}/>:
                        route.private? (
                            authenticated? route.component &&
                                <route.component {...props} routes={route.routes}/> : <Redirect to='/home'/>         
                        ) : route.component && <route.component {...props} routes={route.routes}/>
                }
            />
        </React.Suspense>
    );
};

export default RouteWithSubRoutes;
