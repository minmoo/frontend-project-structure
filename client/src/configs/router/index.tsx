import { Switch } from 'react-router-dom';
import { TRoute } from './config';
import RouteWithSubRoutes from './RouteWithSubRoutes';

export type TRoutesProps = {
  routes: TRoute[];
};

const CustomRouter: React.FC<TRoutesProps> = ({ routes }: TRoutesProps) => {
  return (
    <Switch>{routes && routes.map((route: TRoute, idx: number) => <RouteWithSubRoutes key={idx} {...route} />)}</Switch>
  );
};

export default CustomRouter;
