import React, { FunctionComponent, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from '../components/Loading';

// Main
const Home = lazy(() => import('./Home'));
const Guide = lazy(() => import('./Guide'));
const News = lazy(() => import('./News'));

// User
const Profile = lazy(() => import('./Profile'));
const Player = lazy(() => import('./Player'));
const Characters = lazy(() => import('./Characters'));

// Store
const Store = lazy(() => import('./Store'));

// Auth
const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));
const OAuth2Callback = lazy(() => import('../components/OAuth2/Callback'));

const PrivacyPolicy = lazy(() => import('./PrivacyPolicy'));
const TermsOfService = lazy(() => import('./TermsOfService'));
const PageNotFound = lazy(() => import('./PageNotFound'));

const Routes: FunctionComponent = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/auth/callback" exact component={OAuth2Callback} />
      <Route path="/register" exact component={Register} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/player" exact component={Player} />
      <Route path="/characters" exact component={Characters} />
      <Route path="/guide" component={Guide} /> {/* Guide has subroutes so we do not use exact */}
      <Route path="/news" exact component={News} />
      <Route path="/store" exact component={Store} />
      <Route path="/privacy" exact component={PrivacyPolicy} />
      <Route path="/tos" exact component={TermsOfService} />
      <Route component={PageNotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
