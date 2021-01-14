import React, { FC } from 'react';

import Routes from './routes';

import './styles/index.css';

import Header from './components/Header';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <div id="fullpage" className="fullpage flex-container column" data-theme="dark">
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>

      <Header style={{ flex: '0' }} />

      <main id="content" className="main-content" style={{ flex: '1' }}>
        <Routes />
      </main>

      <div style={{ flex: '0' }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
