import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

import Subrouter from '../../../components/Subrouter';

import './GuideSubroute.css';
import GuideData from '../GuideData';
import GuideSubrouteSubroute from '../GuideSubrouteSubroute';

interface RouteParams {
  subId: string;
}

const GuideSubroute: FunctionComponent = () => {
  const { subId } = useParams<RouteParams>();

  const topic = GuideData.find(({ id }) => id === subId);

  if (topic == null) return <h2>Welcome Subroute</h2>;

  const renderSubtourer = () => {
    if (topic.subroute == null) return <div />;

    return <Subrouter routes={topic.subroute} subcomponent={<GuideSubrouteSubroute />} isChild />;
  };

  return (
    <div>
      <h2>{topic.name}</h2>
      {renderSubtourer()}
    </div>
  );
};

export default GuideSubroute;
