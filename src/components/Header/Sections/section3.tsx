import React from 'react';

import Link from '../../Link';

export default function (t: any) {
  return [
    [
      <Link to="/login" key="1" largeSlim>
        <i className="fas fa-sign-in-alt" /> {t('header.login')}
      </Link>,
    ],
  ];
}
