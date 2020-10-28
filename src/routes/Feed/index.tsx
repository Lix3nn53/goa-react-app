import React, { FunctionComponent, useState, useEffect } from 'react';
import Loading from '../../components/Loading';

const LoadableFeed: FunctionComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [component, setComponent] = useState<FunctionComponent>();

  useEffect(() => {
    import('./Feed').then((loaded) => {
      setIsLoaded(true);
      setComponent(loaded.default);
    });
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }

  return <div>{component}</div>;
};

export default LoadableFeed;
