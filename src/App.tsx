import React, { FC } from 'react';

import Routes from './routes';
import './styles/index.scss';

const App: FC = () => (
  <div className="site">
    <a className="skip-link screen-reader-text" href="#content">
      Skip to content
    </a>
    <header className="masthead">Header</header>
    <h1 className="page-title">Saturday, June 17th</h1>
    <main id="content" className="main-content">
      <Routes />
    </main>
    <aside className="sidebar">Sidebar</aside>
    <footer className="colophon">Footer</footer>
  </div>
);

export default App;
