import React, { FunctionComponent, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from '../components/Loading';

const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));
const Guide = lazy(() => import('./Guide'));
const PageNotFound = lazy(() => import('./PageNotFound'));

const Routes: FunctionComponent = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/guide" component={Guide} /> {/* Guide has subroutes so we do not use exact */}
      <Route component={PageNotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
