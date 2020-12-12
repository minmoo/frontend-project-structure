import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { TRoute } from '../../configs/router/config';

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
                            //route의 하위 route가 있을 경우 routes props로 전달
                            //이렇게하면 구성 요소가 현재 경로의 하위 경로를 인식하게됩니다.
                            //컴포넌트는 이 routes prop을 암묵적으로 받아 들여야합니다.
                                <route.component {...props} routes={route.routes}/> : <Redirect to='/home'/>    
                        ) : route.component && <route.component {...props} routes={route.routes}/>
                }
            />
        </React.Suspense>
    );
};

export default RouteWithSubRoutes;
