import React, { FunctionComponent, Suspense, lazy } from 'react';
import Loading from '../../components/Loading';

const Register = lazy(() => import('./Store'));

const LoadableRegister: FunctionComponent = () => (
  <Suspense fallback={<Loading />}>
    <Register />
  </Suspense>
);

export default LoadableRegister;
