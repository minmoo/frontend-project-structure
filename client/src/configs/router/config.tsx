import * as React from 'react';

export type TRoute = {
  path: string | string[];
  exact: boolean;
  fallback: NonNullable<React.ReactNode> | null; //Preloader for lazy loading
  component?: React.LazyExoticComponent<React.ComponentType<any>>; // Lazy Loaded component
  routes?: TRoute[]; // Sub routes
  redirect?: string; // Redirect path
  private?: boolean; // router is private, this is going to be true
};

export const routes: TRoute[] = [
  {
    path: '/',
    exact: true,
    redirect: '/home',
    fallback: <div> Loading.. </div>,
  },
  {
    path: '/home',
    // component: React.lazy(() => import('../../common/layout')),
    component: React.lazy(() => import('../../pages/main')),
    exact: false,
    private: false,
    fallback: <div> Loading...</div>,
    routes: [
      {
        path: '/home/dashboard',
        component: React.lazy(() => import('../../pages/main/dashboard')),
        exact: false,
        private: false,
        fallback: <div> Loading...</div>,
      },
      {
        path: '/home/websocket',
        component: React.lazy(() => import('../../pages/main/websocket')),
        exact: false,
        private: false,
        fallback: <div> Loading...</div>,
      },
    ],
  },
  {
    path: ['/signIn', '/logIn'],
    component: React.lazy(() => import('../../pages/sign/SignInPage')),
    exact: false,
    fallback: <div>Loading....</div>,
  },
  {
    path: '/signUp',
    component: React.lazy(() => import('../../pages/sign/SignUpPage')),
    exact: false,
    fallback: <div>Loading....</div>,
  },
];
