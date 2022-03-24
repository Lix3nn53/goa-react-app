import React, { FunctionComponent, Suspense, lazy } from 'react';
import Loading from '../../components/Loading';

const Map = lazy(() => import('./Map'));

const LoadableMap: FunctionComponent = () => (
  <Suspense fallback={<Loading />}>
    <Map />
  </Suspense>
);

export default LoadableMap;
