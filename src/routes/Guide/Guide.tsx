import React, { FunctionComponent } from 'react';

import './Guide.css';
import Subrouter from '../../components/Subrouter';
import GuideSubroute from './GuideSubroute';

const topics = [
  {
    name: 'Welcome',
    id: 'introduction',
  },
  {
    name: 'React Router',
    id: 'react-router',
  },
  {
    name: 'React.js',
    id: 'reactjs',
  },
  {
    name: 'Functional Programming',
    id: 'functional-programming',
  },
];

const Guide: FunctionComponent = () => {
  return (
    <div>
      <h1>Topics</h1>
      <Subrouter routes={topics} subcomponent={<GuideSubroute />} />
    </div>
  );
};

export default Guide;
