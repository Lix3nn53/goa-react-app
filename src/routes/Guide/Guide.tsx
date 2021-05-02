import React, { FunctionComponent } from 'react';

import './Guide.css';
import Subrouter from '../../components/Subrouter';

import GuideSubroute from './GuideSubroute';

import Data from './Data';

const Guide: FunctionComponent = () => {
  return (
    <div>
      <Subrouter routes={Data} subcomponent={<GuideSubroute />} />
    </div>
  );
};

export default Guide;
