import React, { FunctionComponent } from 'react';

import './Home.scss';

const Home: FunctionComponent = () => (
  <div className="grid home">
    <h1 className="home-top">Top</h1>
    <div className="home-main">Main</div>
    <div className="home-sidebar">Sidebar</div>
  </div>
);

export default Home;
