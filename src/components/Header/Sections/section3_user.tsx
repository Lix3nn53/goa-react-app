import React from 'react';

import Link from '../../Link';
import Dropdown from '../../Dropdown';
import ButtonText from '../../ButtonText';

export default function (t: any, user: any) {
  return [
    [
      <span key="1">
        {t('header.credits')}: {user.credits}
      </span>,
      <Link to="/buy_credits" cta secondary key="2">
        {t('header.buy_credits')}
      </Link>,
      <Dropdown
        text={user.mc_username}
        elements={[
          <Link to="/profile">{t('header.profile')}</Link>,
          <Link to="/characters">{t('header.characters')}</Link>,
          <ButtonText type="button" onClick={() => console.log('logout')}>
            {t('header.logout')}
          </ButtonText>,
        ]}
        keys={['profile', 'characters', 'logout']}
      />,
    ],
  ];
}
