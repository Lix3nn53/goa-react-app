import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

import './GuideSubroute.css';

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

interface RouteParams {
  subId: string;
}

const GuideSubroute: FunctionComponent = () => {
  const { subId } = useParams<RouteParams>();

  const topic = topics.find(({ id }) => id === subId);

  if (topic == null) return <h2>Welcome</h2>;

  return (
    <div>
      <h2>{topic.name}</h2>
    </div>
  );
};

export default GuideSubroute;
