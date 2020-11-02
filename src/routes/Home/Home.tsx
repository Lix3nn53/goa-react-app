import React, { FunctionComponent } from 'react';

import './Home.scss';
import logo from '../../img/logo.png';

import Banner from '../../components/Banner';
import Card from '../../components/Card';

const Home: FunctionComponent = () => (
  <div className="home flex-container column">
    <div className="flex-item top" style={{ flex: '1' }}>
      <img src={logo} alt="logo" className="logo" />
    </div>
    <div className="flex-item" style={{ flex: '1' }}>
      <div className="grid main">
        <Banner />
        <div className="posts">
          <Card>
            <p>ASD</p>
          </Card>
        </div>

        <div className="sidebar">Sidebar</div>
      </div>
    </div>
  </div>
);

export default Home;
