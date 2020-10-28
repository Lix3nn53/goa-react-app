import React, { FunctionComponent, useState, useEffect } from 'react';
import Loading from '../../components/Loading';

const LoadableHome: FunctionComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [component, setComponent] = useState<FunctionComponent>();

  useEffect(() => {
    import('./Home').then((loaded) => {
      setIsLoaded(true);
      setComponent(loaded.default);
    });
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }

  return <div>{component}</div>;
};

export default LoadableHome;
