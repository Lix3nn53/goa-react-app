import React, { FunctionComponent } from 'react';

import './Home.scss';
import logo from '../../img/logo.png';

const Home: FunctionComponent = () => (
  <div className="grid home">
    <div className="top">
      <img src={logo} alt="logo" className="logo" />
    </div>
    <div className="main">Main</div>
    <div className="sidebar">Sidebar</div>
  </div>
);

export default Home;
