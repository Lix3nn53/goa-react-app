import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

import './GuideSubroute.css';
import Data from '../Data';

interface RouteParams {
  subId: string;
}

const GuideSubroute: FunctionComponent = () => {
  const { subId } = useParams<RouteParams>();

  const topic = Data.find(({ id }) => id === subId);

  if (topic == null) return <h2>Welcome</h2>;

  return (
    <div>
      <h2>{topic.name}</h2>
    </div>
  );
};

export default GuideSubroute;
