import React, { FunctionComponent, Suspense, lazy } from 'react';
import Loading from '../../components/Loading';

const News = lazy(() => import('./News'));

const LoadableNews: FunctionComponent = () => (
  <Suspense fallback={<Loading />}>
    <News />
  </Suspense>
);

export default LoadableNews;
