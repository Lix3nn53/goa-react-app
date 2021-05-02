import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

import Data from '../Data';

interface RouteParams {
  subId0: string;
}

const GuideSubroute: FunctionComponent = () => {
  const { subId0 } = useParams<RouteParams>();

  const topic = Data.find(({ id }) => id === subId0);

  if (topic == null) return <h2>Welcome Subroute</h2>;

  return (
    <div className="guideSubroute">
      <h2>{topic.name}</h2>
    </div>
  );
};

export default GuideSubroute;
