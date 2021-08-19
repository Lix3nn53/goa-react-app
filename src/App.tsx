import React, { FC, useEffect } from 'react';

// i18
import './locale';
import { useTranslation } from 'react-i18next';

// redux
import { useDispatch } from 'react-redux';
import actions from './store/actions';

import Routes from './routes';

import './styles/index.css';

import Header from './components/Header';
import brand from './img/favicon.webp';
import Link from './components/Link';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';

const App: FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchUser());
  }, []);

  return (
    <React.StrictMode>
      <div id="fullpage" className="fullpage flex-container column" data-theme="dark">
        <a className="skip-link screen-reader-text" href="#content">
          Skip to content
        </a>

        <Header
          style={{ flex: '0' }}
          section1={[
            <Link to="/" key="1" rel="home">
              <img src={brand} alt="brand" className="brand" />
            </Link>,
            <span style={{ display: 'flex' }} key="2">
              <i className="fas fa-globe" style={{ flex: '0', alignSelf: 'center' }} />
              <Dropdown
                options={['EN', 'TR']}
                handleChange={(value: string) => {
                  i18n.changeLanguage(value.toLowerCase());
                }}
              >
                Dropdown
              </Dropdown>
            </span>,
          ]}
          section2={[
            <Link to="/guide/introduction" key="1">
              {t('header.guide')}
            </Link>,
            <Link to="/news" key="2">
              {t('header.news')}
            </Link>,
            <Link to="/store" key="3">
              {t('header.store')}
            </Link>,
          ]}
          section3={[
            <Link to="/login" key="1">
              {t('header.login')}
            </Link>,
            <Link cta to="/register" key="2">
              {t('header.register')}
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
