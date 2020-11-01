import React, { FunctionComponent, Suspense, lazy } from 'react';
import Loading from '../../components/Loading';

const Home = lazy(() => import('./Home'));

const LoadableHome: FunctionComponent = () => (
  <Suspense fallback={<Loading />}>
    <Home />
  </Suspense>
);

export default LoadableHome;
