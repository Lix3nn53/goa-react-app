import React, { FunctionComponent } from 'react';

import './Guide.css';
import Subrouter from '../../components/Subrouter';

import GuideSubroute from './GuideSubroute';
import GuideSubrouteSubroute from './GuideSubrouteSubroute';
import GuideSubrouteSubrouteSubroute from './GuideSubrouteSubrouteSubroute';

import Data from './Pages';

const Guide: FunctionComponent = () => {
  return (
    <div className="guide">
      <Subrouter
        routes={Data}
        subcomponents={[
          <GuideSubroute />,
          <GuideSubrouteSubroute />,
          <GuideSubrouteSubrouteSubroute />,
        ]}
        deep={3}
      >
        <div className="filler-1" />
        <div className="filler-2" />
      </Subrouter>
    </div>
  );
};

export default Guide;
