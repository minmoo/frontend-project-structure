import * as React from 'react';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import { TRoute } from './config';

export type TRoutesProps = {
  routes: TRoute[];
};

const CustomRouter: React.FC<TRoutesProps> = ({ routes }: TRoutesProps) => {
  return (
    <Switch>{routes && routes.map((route: TRoute, idx: number) => <RouteWithSubRoutes key={idx} {...route} />)}</Switch>
  );
};

export default CustomRouter;
