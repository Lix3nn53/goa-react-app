import React, { FunctionComponent } from 'react';

import './Guide.css';
import Subrouter from '../../components/Subrouter';

import GuideSubroute from './GuideSubroute';
import GuideSubrouteSubroute from './GuideSubrouteSubroute';

import Data from './Data';

const Guide: FunctionComponent = () => {
  return (
    <div className="guide">
      <Subrouter
        className="grid"
        routes={Data}
        subcomponents={[<GuideSubroute />, <GuideSubrouteSubroute />]}
      />
    </div>
  );
};

export default Guide;
