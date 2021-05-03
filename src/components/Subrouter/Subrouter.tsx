import React, { FC, ReactNode } from 'react';
import { Link, Route, useRouteMatch, useLocation } from 'react-router-dom';

import './Subrouter.css';

export type Subroute = {
  name: string;
  id: string;
  subroute?: Array<Subroute>;
};

export type Props = JSX.IntrinsicElements['div'] & {
  routes: Array<Subroute>;
  subcomponents: Array<ReactNode>;
};

const Subrouter: FC<Props> = ({ className, style, routes, subcomponents }) => {
  const { url, path } = useRouteMatch();
  const { pathname } = useLocation();

  const lastPath = pathname.substring(pathname.lastIndexOf('/') + 1);

  const baseStyle = 'subrouter';
  const classNames = className ? `${baseStyle} ${className}` : `${baseStyle}`;

  const formLinks = (basePath: string, from: Array<Subroute>): ReactNode => {
    return from.map(({ name, id, subroute }) => {
      const active = lastPath === id ? 'active' : 'not-active';

      if (subroute) {
        return (
          <li
            className={`has-subroute ${active}`}
            id={`${basePath}/${id}`}
            key={`${basePath}/${id}`}
          >
            <Link className={active} to={`${url}${basePath}/${id}`}>
              {name}
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
        <li className={`no-subroute ${active}`} id={`${basePath}/${id}`} key={`${basePath}/${id}`}>
          <Link className={active} to={`${url}${basePath}/${id}`}>
            {name}
          </Link>
        </li>
      );
    });
  };

  const countSubroute = (search: Array<Subroute>, deep: number): number => {
    let count = 0;

    /* eslint-disable-next-line no-plusplus */
    for (let i = 0; i < search.length; i++) {
      const { subroute } = search[i];
      if (subroute) {
        count = deep + 1;
        const subCount = countSubroute(subroute, count);
        if (subCount > count) count = subCount;
      }
    }

    return count;
  };

  const formRoutes = (): Array<ReactNode> => {
    const list = [];

    const count = countSubroute(routes, 0);
    // console.log(count);

    let routePath = `${path}`;

    /* eslint-disable-next-line no-plusplus */
    for (let i = 0; i <= count; i++) {
      routePath += `/:subId${i}`;
      list.push(
        <Route exact path={routePath} key={i}>
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
    </div>
  );
};

export default Subrouter;
