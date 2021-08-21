import React from 'react';

import Link from '../../Link';
import Dropdown from '../../Dropdown';

export default function (t: any) {
  return [
    [
      <Link to="/characters" key="1">
        {t('header.credits')}
      </Link>,
      <Dropdown
        text="Profile"
        elements={[
          <span>{t('header.profile')}</span>,
          <span>{t('header.characters')}</span>,
          <span>{t('header.logout')}</span>,
        ]}
        keys={['profile', 'characters', 'logout']}
      />,
    ],
  ];
}
