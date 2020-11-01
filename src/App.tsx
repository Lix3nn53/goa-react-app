import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import Routes from './routes';

import './styles/index.scss';

import Header from './components/Header';
import Footer from './components/Footer';

const App: FC = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  return (
    <div className="fullpage flex-container column">
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>

      <Header path={path} className="flex-item" style={{ flex: '0' }} />

      <main id="content" className="flex-item main-content" style={{ flex: '1' }}>
        <Routes />
      </main>

      <Footer className="flex-item" style={{ flex: '0' }} />
    </div>
  );
};

export default App;
