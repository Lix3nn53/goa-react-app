import React from 'react';

import Link from '../../Link';

export default function (t: any) {
  return [
    [
      <Link to="/login" key="1">
        {t('header.login')}
      </Link>,
      <Link cta to="/login" key="2">
        {t('header.register')}
      </Link>,
    ],
  ];
}
