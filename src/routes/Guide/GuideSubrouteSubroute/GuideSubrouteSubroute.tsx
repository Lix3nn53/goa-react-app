import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

import './GuideSubrouteSubroute.css';
import Data from '../Data';

interface RouteParams {
  subId: string;
  subSubId: string;
}

const GuideSubrouteSubroute: FunctionComponent = () => {
  const { subId, subSubId } = useParams<RouteParams>();

  // console.log(subId, subSubId);

  const topic = Data.find(({ id }) => id === subId);

  const subTopic = topic?.subroute?.find(({ id }) => id === subSubId);

  if (subTopic == null) return <h2>Welcome SubrouteSubroute</h2>;

  return (
    <div>
      <h2>{subTopic.name}</h2>
    </div>
  );
};

export default GuideSubrouteSubroute;
