import React, { FC } from 'react';

import Routes from './routes';

import './styles/index.scss';

import Header from './components/Header';
import Footer from './components/Footer';

const App: FC = () => (
  <div className="fullpage flex-container column">
    <a className="skip-link screen-reader-text" href="#content">
      Skip to content
    </a>

    <Header className="flex-item flex-header" />

    <main id="content" className="main-content flex-item flex-main">
      <Routes />
    </main>

    <Footer className="flex-item flex-footer" />
  </div>
);

export default App;
