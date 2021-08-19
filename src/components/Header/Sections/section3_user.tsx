import React from 'react';

import Link from '../../Link';

export default function (t: any) {
  return [
    [
      <Link to="/login" key="1">
        {t('header.loginnn')}
      </Link>,
      <Link cta to="/register" key="2">
        {t('header.registerrrr')}
      </Link>,
    ],
  ];
}
