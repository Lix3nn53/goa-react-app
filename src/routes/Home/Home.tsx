import React, { FunctionComponent } from 'react';

import './Home.scss';
import logo from '../../img/logo.png';

import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Loading from '../../components/Loading';

const Home: FunctionComponent = () => (
  <div className="home flex-container column">
    <div className="top" style={{ flex: '1' }}>
      <img src={logo} alt="logo" className="top logo" />
    </div>
    <div className="grid main" style={{ flex: '1' }}>
      <Banner icon={<span className="icon-130" />} title="Latest News">
        Check out what Adelia has been up to!
      </Banner>
      <div className="posts">
        <div className="flex-container column">
          <Card header={<p>A</p>} footer={<p>A</p>}>
            <p>ASD</p>
          </Card>
          <Card header={<p>A</p>} footer={<p>A</p>}>
            <p>ASD</p>
          </Card>
          <Card header={<p>A</p>} footer={<p>A</p>}>
            <p>ASD</p>
          </Card>
          <Loading />
        </div>
      </div>

      <div className="sidebar flex-container column">
        <Card header={<p>A</p>} style={{ flex: '2' }}>
          <p>ASD</p>
        </Card>
        <Card header={<p>A</p>} style={{ flex: '1' }}>
          <p>ASD</p>
        </Card>
      </div>
    </div>
  </div>
);

export default Home;
