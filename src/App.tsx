import React, { FC, useEffect } from 'react';

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
      <div id="fullpage" className="fullpage flex-container column" data-theme="dark">
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
