import React, { FunctionComponent } from 'react';

import './Home.scss';
import logo from '../../img/logo.png';

const Home: FunctionComponent = () => (
  <div className="grid home">
    <h1 className="top">
      <img src={logo} alt="logo" className="logo" />
    </h1>
    <div className="main">Main</div>
    <div className="sidebar">Sidebar</div>
  </div>
);

export default Home;
