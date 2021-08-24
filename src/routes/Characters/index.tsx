import React, { FunctionComponent, Suspense, lazy } from 'react';
import Loading from '../../components/Loading';

const Characters = lazy(() => import('./Characters'));

const LoadableCharacters: FunctionComponent = () => (
  <Suspense fallback={<Loading />}>
    <Characters />
  </Suspense>
);

export default LoadableCharacters;
