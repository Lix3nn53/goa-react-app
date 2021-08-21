import React from 'react';

import Link from '../../Link';

export default function (t: any) {
  return [
    [
      <Link to="/guide/introduction" key="11">
        {t('header.guide')}
      </Link>,
      <Link to="/news" key="12">
        {t('header.news')}
      </Link>,
      <Link to="/store" key="13">
        {t('header.store')}
      </Link>,
    ],
  ];
}
