import React, { FunctionComponent, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from '../components/Loading';

const Home = lazy(() => import('./Home'));
const Feed = lazy(() => import('./Feed'));

const Routes: FunctionComponent = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/feed" exact component={Feed} />
    </Switch>
  </Suspense>
);

export default Routes;
