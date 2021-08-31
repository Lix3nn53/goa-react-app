import React from 'react';

import Link from '../../Link';
import Dropdown from '../../Dropdown';
import ButtonText from '../../ButtonText';

import AuthAPI from '../../../api/AuthAPI';

export default function (t: any, user: any, mcUsername: any) {
  console.log('MCUSERNAME: ', mcUsername);

  const getText = () => {
    if (!user) return 'Loading...';
    if (!user.uuid) return 'NULL';

    switch (mcUsername) {
      case null:
        return 'Loading...';
      case false:
        return 'NULL';
      default:
        return mcUsername;
    }
  };

  return [
    [
      <span key="21">
        {t('header.credits')}: {user ? user.credits : '?'}
      </span>,
      <Link to="/buy_credits" cta secondary key="22">
        {t('header.buy_credits')}
      </Link>,
      <Dropdown
        text={getText()}
        elements={[
          <Link to="/profile">{t('header.profile')}</Link>,
          <Link to="/player">{t('header.player')}</Link>,
          <Link to="/characters">{t('header.characters')}</Link>,
          <ButtonText
            type="button"
            secondary
            onClick={async () => {
              await AuthAPI.logout();

              window.location.href = '/';
            }}
          >
            {t('header.logout')}
          </ButtonText>,
        ]}
        keys={['profile', 'player', 'characters', 'logout']}
        key="23"
      />,
    ],
  ];
}
