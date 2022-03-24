import React from 'react';

import Link from '../../Link';

export default function (t: any) {
  return [
    [
      <Link to="/guide/introduction" key="11" largeSlim>
        {t('header.guide')}
      </Link>,
      <Link to="/news" key="12" largeSlim>
        {t('header.news')}
      </Link>,
      <Link to="/map" key="13" largeSlim>
        {t('header.map')}
      </Link>,
      <Link to="/store" key="14" largeSlim magical secondary>
        {t('header.store')}
      </Link>,
    ],
  ];
}
