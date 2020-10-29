import React, { FunctionComponent, Suspense, lazy } from 'react';
import Loading from '../../components/Loading';

const Feed = lazy(() => import('./Feed'));

const LoadableFeed: FunctionComponent = () => (
  <Suspense fallback={<Loading />}>
    <Feed />
  </Suspense>
);

export default LoadableFeed;
