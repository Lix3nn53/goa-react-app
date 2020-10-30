import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home: FunctionComponent = () => (
  <div className="grid home">
    <h1 className="home-top">Top</h1>
    <div className="home-main">
      Main<Link to="/feed">Go to feed</Link>
    </div>
    <div className="home-sidebar">Sidebar</div>
  </div>
);

export default Home;
