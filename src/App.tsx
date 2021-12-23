import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// i18
import './locale';
import { useTranslation } from 'react-i18next';

// redux
import { useDispatch, useSelector } from 'react-redux';
import actions from './store/actions';

import Routes from './routes';

import './styles/index.css';

import Header from './components/Header';
import HeaderSection1 from './components/Header/Sections/section1';
import HeaderSection2 from './components/Header/Sections/section2';
import HeaderSection3 from './components/Header/Sections/section3';
import HeaderSection3User from './components/Header/Sections/section3_user';
import Footer from './components/Footer';

const App: FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const location = useLocation();
  const path = location.pathname.split('/')[1];
  console.log(path);

  let dataPage = path;
  if (path === '') {
    dataPage = 'home';
  }

  useEffect(() => {
    const htmlTag = document.getElementById('root');
    if (htmlTag == null) return;
    htmlTag.setAttribute('data-theme', 'dark');
  }, []);

  useEffect(() => {
    dispatch(actions.fetchUser());
  }, []);

  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    if (!user || !user.uuid) return;

    dispatch(actions.fetchMcUsername(user.uuid));
  }, [user]);

  const mcUsername = useSelector((state: any) => state.mc_username);

  return (
    <React.StrictMode>
      <div className="fullpage-bg" />
      <div data-page={dataPage} className="page-bg" />
      <div id="fullpage" className="fullpage flex-container column">
        <a className="skip-link screen-reader-text" href="#content">
          Skip to content
        </a>

        <Header
          style={{ flex: '0' }}
          section1={HeaderSection1(i18n)}
          section2={HeaderSection2(t)}
          section3={HeaderSection3(t)}
          section3User={HeaderSection3User(t, user, mcUsername)}
        />

        <main id="content" className="main-content flex-one">
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
