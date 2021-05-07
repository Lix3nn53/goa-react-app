import React, { FC, ReactNode } from 'react';
import { Link, Route, useRouteMatch, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Subrouter.css';

export type Subroute = {
  name: string;
  id: string;
  subroute?: Array<Subroute>;
};

export type Props = JSX.IntrinsicElements['div'] & {
  routes: Array<Subroute>;
  subcomponents: Array<ReactNode>;
  deep: number;
};

const Subrouter: FC<Props> = ({ className, style, routes, subcomponents, deep, children }) => {
  const { url, path } = useRouteMatch();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const lastPath = pathname.substring(pathname.lastIndexOf('/') + 1);

  const baseStyle = 'subrouter';
  const classNames = className ? `${baseStyle} ${className}` : `${baseStyle}`;

  const formLinks = (basePath: string, from: Array<Subroute>): ReactNode => {
    return from.map(({ name, id, subroute }) => {
      const active = lastPath === id ? 'active' : '';

      if (subroute) {
        return (
          <li className="has-subroute" id={`${basePath}/${id}`} key={`${basePath}/${id}`}>
            <Link className={active} to={`${url}${basePath}/${id}`}>
              {t(name)}
            </Link>

            <ul
              className={
                pathname.includes(`${basePath}/${id}`) ? 'sub-sub-list' : 'sub-sub-list hidden'
              }
            >
              {formLinks(`${basePath}/${id}`, subroute)}
            </ul>
          </li>
        );
      }

      return (
        <li className="no-subroute" id={`${basePath}/${id}`} key={`${basePath}/${id}`}>
          <Link className={active} to={`${url}${basePath}/${id}`}>
            {t(name)}
          </Link>
        </li>
      );
    });
  };

  const formRoutes = (): Array<ReactNode> => {
    const list = [];

    let routePath = `${path}`;

    /* eslint-disable-next-line no-plusplus */
    for (let i = 0; i < deep; i++) {
      routePath += `/:subId${i}`;
      list.push(
        <Route exact path={routePath} key={`subroute${i}`}>
          {subcomponents[i]}
        </Route>,
      );
    }

    return list;
  };

  return (
    <div className={classNames} style={style}>
      <ul className="sub-list">{formLinks('', routes)}</ul>

      {formRoutes()}
      {children}
    </div>
  );
};

export default Subrouter;
