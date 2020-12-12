import * as React from 'react';

export type TRoute = {
    path: string,
    exact: boolean,
    fallback: NonNullable<React.ReactNode> | null,                //Preloader for lazy loading
    component?: React.LazyExoticComponent<React.ComponentType<any>>,    // Lazy Loaded component
    routes?: TRoute[],                                      // Sub routes
    redirect?: string,                                      // Redirect path
    private?: boolean                                       // router is private, this is going to be true
};

export const routes: TRoute[] = [
    {
        path: '/',
        exact: true,
        redirect: '/home',
        fallback: <div> Loading.. </div>
    },
    {
        path: '/home',
        component: React.lazy(() => import('../../common/layout')),
        exact: false,
        private: false,
        fallback: <div> Loading...</div>,
        routes: [
            {
                path: '/home/websocket',
                component: React.lazy(() => import('../../main/pages/websocket')),
                exact: false,
                private: false,
                fallback: <div> Loading...</div>
            }
        ]
    },
    {
        path: '/signIn',
        component: React.lazy(() => import('../../main/sign/SignIn')),
        exact: false,
        fallback:<div>Loading....</div>
    },
    {
        path: '/signUp',
        component: React.lazy(() => import('../../main/sign/SignUp')),
        exact: false,
        fallback:<div>Loading....</div>
    }
];