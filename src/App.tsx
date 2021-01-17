import React, { FC } from 'react';

import Routes from './routes';

import './styles/index.css';

import Header from './components/Header';
import brand from './img/favicon.png';
import Link from './components/Link';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <React.StrictMode>
      <div id="fullpage" className="fullpage flex-container column" data-theme="dark">
        <a className="skip-link screen-reader-text" href="#content">
          Skip to content
        </a>

        <Header
          style={{ flex: '0' }}
          section1={[
            <Link to="/" key="1">
              <img src={brand} alt="brand" className="brand" />
            </Link>,
          ]}
          section2={[
            <Link to="/login" key="1">
              Wiki
            </Link>,
            <Link to="/login" key="2">
              Lore
            </Link>,
            <Link to="/login" key="3">
              Store
            </Link>,
          ]}
          section3={[
            <Link to="/login" key="1">
              Login
            </Link>,
            <Link cta to="/register" key="2">
              Register
            </Link>,
          ]}
        />

        <main id="content" className="main-content" style={{ flex: '1' }}>
          <Routes />
        </main>

        <div style={{ flex: '0' }}>
          <Footer />
        </div>
      </div>
    </React.StrictMode>
  );
};

export default App;
