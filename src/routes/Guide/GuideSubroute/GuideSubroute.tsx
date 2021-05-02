import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

import Data from '../Data';

interface RouteParams {
  subId0: string;
}

const GuideSubroute: FunctionComponent = () => {
  const { subId0 } = useParams<RouteParams>();

  // console.log(subId0);

  const topic = Data.find(({ id }) => id === subId0);

  if (topic == null) return <h1>Error Subroute</h1>;

  return (
    <div className="guideSubroute">
      <h1>{topic.name}</h1>
    </div>
  );
};

export default GuideSubroute;
