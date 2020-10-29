import React, { FunctionComponent, Suspense, lazy } from 'react';
import Loading from '../../components/Loading';

const Feed = lazy(() => import('./Home'));

const LoadableHome: FunctionComponent = () => (
  <Suspense fallback={<Loading />}>
    <Feed />
  </Suspense>
);

export default LoadableHome;
