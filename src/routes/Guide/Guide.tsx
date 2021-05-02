import React, { FunctionComponent } from 'react';

import './Guide.css';
import Subrouter from '../../components/Subrouter';

import GuideSubroute from './GuideSubroute';

import GuideData from './GuideData';

const Guide: FunctionComponent = () => {
  return (
    <div>
      <Subrouter routes={GuideData} subcomponent={<GuideSubroute />} />
    </div>
  );
};

export default Guide;
