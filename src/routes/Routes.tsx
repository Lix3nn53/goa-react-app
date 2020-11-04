import React, { FunctionComponent, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from '../components/Loading';

const Home = lazy(() => import('./Home'));
const Feed = lazy(() => import('./Register'));
const PageNotFound = lazy(() => import('./PageNotFound'));

const Routes: FunctionComponent = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/feed" exact component={Feed} />
      <Route component={PageNotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
