import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Link, Route, useRouteMatch, useParams } from 'react-router-dom';

import './Guide.css';

const Guide: FunctionComponent = () => {
  const { url, path } = useRouteMatch();

  return <h1 className="page404">404</h1>;
};

export default Guide;
