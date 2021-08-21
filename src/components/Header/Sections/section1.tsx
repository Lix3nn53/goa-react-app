import React from 'react';

import Link from '../../Link';
import DropdownSelection from '../../DropdownSelection';
import brand from '../../../img/favicon.webp';

export default function (i18n: any) {
  return [
    <Link to="/" key="1" rel="home">
      <img src={brand} alt="brand" className="brand" />
    </Link>,
    <span style={{ display: 'flex' }} key="2">
      <i className="fas fa-globe" style={{ flex: '0', alignSelf: 'center' }} />
      <DropdownSelection
        options={['EN', 'TR']}
        handleChange={(value: string) => {
          i18n.changeLanguage(value.toLowerCase());
        }}
      >
        Dropdown
      </DropdownSelection>
    </span>,
  ];
}
