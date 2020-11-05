import React, { FunctionComponent, Suspense, lazy } from 'react';
import Loading from '../../components/Loading';

const Login = lazy(() => import('./Login'));

const LoadableLogin: FunctionComponent = () => (
  <Suspense fallback={<Loading />}>
    <Login />
  </Suspense>
);

export default LoadableLogin;
