import React, { FunctionComponent, Suspense, lazy } from 'react';
import Loading from '../../components/Loading';

const Profile = lazy(() => import('./Profile'));

const LoadableProfile: FunctionComponent = () => (
  <Suspense fallback={<Loading />}>
    <Profile />
  </Suspense>
);

export default LoadableProfile;
