import React, { FC } from 'react';

import Routes from './routes';

import './styles/index.scss';

import Header from './components/Header';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <div className="fullpage flex-container column">
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>

      <div className="flex-item" style={{ flex: '0' }}>
        <Header />
      </div>

      <main id="content" className="flex-item main-content" style={{ flex: '1' }}>
        <Routes />
      </main>

      <div className="flex-item" style={{ flex: '0' }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
