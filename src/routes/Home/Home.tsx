import React, { FunctionComponent } from 'react';

import './Home.scss';
import logo from '../../img/logo.png';

import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import TwitterTimeline from '../../components/TwitterTimeline';

const Home: FunctionComponent = () => (
  <div className="home flex-container column">
    <div className="flex-item top" style={{ flex: '1' }}>
      <img src={logo} alt="logo" className="logo" />
    </div>
    <div className="flex-item" style={{ flex: '1' }}>
      <div className="grid main">
        <Banner icon={<span className="icon-130" />} title="Latest News">
          Check out what Adelia has been up to!
        </Banner>
        <div className="posts">
          <div className="flex-container column">
            <Card className="flex-item" footer={<p>A</p>}>
              <p>ASD</p>
            </Card>
            <Card className="flex-item" footer={<p>A</p>}>
              <p>ASD</p>
            </Card>
            <Card className="flex-item" footer={<p>A</p>}>
              <p>ASD</p>
            </Card>
            <Loading />
          </div>
        </div>

        <div className="sidebar">
          <Card>
            <TwitterTimeline profile="Minecraft" />
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
