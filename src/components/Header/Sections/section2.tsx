import React from 'react';

import Link from '../../Link';

export default function (t: any) {
  return [
    [
      <Link to="/guide/introduction" key="1">
        {t('header.guide')}
      </Link>,
      <Link to="/news" key="2">
        {t('header.news')}
      </Link>,
      <Link to="/store" key="3">
        {t('header.store')}
      </Link>,
    ],
  ];
}
