import React, { FunctionComponent, Suspense, lazy } from 'react';
import Loading from '../../components/Loading';

const Player = lazy(() => import('./Player'));

const LoadablePlayer: FunctionComponent = () => (
  <Suspense fallback={<Loading />}>
    <Player />
  </Suspense>
);

export default LoadablePlayer;
