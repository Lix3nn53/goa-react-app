import React, { FunctionComponent, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '../../../../../components/Card';
import Table from '../../../../../components/Table';

export type Props = JSX.IntrinsicElements['div'] & {
  name: string;
  icon: string;
  classTier: number;
  element: string;
  weapons: Array<string>;
  armors: Array<string>;
  offhand?: Array<string>;
  damage: number;
  defense: number;
  health: number;
  mana: number;
  critChance: number;
};

const ClassCard: FunctionComponent<Props> = ({
  name,
  icon,
  classTier,
  element,
  weapons,
  armors,
  offhand,
  damage,
  defense,
  health,
  mana,
  critChance,
}) => {
  const { t } = useTranslation();

  const renderWeapons = () => {
    const list: Array<ReactNode> = [];

    weapons.forEach((str, index) => {
      list.push([
        /* eslint-disable-next-line react/no-array-index-key */
        <span key={index} style={{ fontWeight: 'bold' }}>
          {str}
        </span>,
      ]);
    });

    return list;
  };

  const renderArmors = () => {
    const list: Array<ReactNode> = [];

    armors.forEach((str, index) => {
      list.push([
        /* eslint-disable-next-line react/no-array-index-key */
        <span key={index} style={{ fontWeight: 'bold' }}>
          {str}
        </span>,
      ]);
    });

    return list;
  };

  const renderOffhandTitle = () => {
    if (!offhand) return [];

    return <h3 style={{ textAlign: 'center' }}>{t('item.offhand')}</h3>;
  };

  const renderOffhand = () => {
    if (!offhand) return [];

    const list: Array<ReactNode> = [];

    offhand.forEach((str, index) => {
      list.push([
        /* eslint-disable-next-line react/no-array-index-key */
        <span key={index} style={{ fontWeight: 'bold' }}>
          {str}
        </span>,
      ]);
    });

    return list;
  };

  return (
    <Card header={<h2>{name}</h2>} style={{ padding: '9px' }}>
      <img
        src={icon}
        alt="icon"
        className="pixel-icon"
        style={{ width: '150px', margin: 'auto' }}
      />
      <Table
        style={{ paddingTop: '20px' }}
        cells={[
          [<span style={{ fontWeight: 'bold' }}>{t('classes.tier')}: </span>, classTier],
          [<span style={{ fontWeight: 'bold' }}>{t('element.main')}: </span>, t(element)],
        ]}
      />
      <h3 style={{ textAlign: 'center' }}>{t('item.weapons')}</h3>
      <Table cells={[renderWeapons()]} />
      <h3 style={{ textAlign: 'center' }}>{t('item.armors')}</h3>
      <Table cells={[renderArmors()]} />
      {renderOffhandTitle()}
      <Table cells={[renderOffhand()]} />

      <h3 style={{ textAlign: 'center' }}>Attributes</h3>
      <Table
        cells={[
          [<span style={{ fontWeight: 'bold' }}>{t('attribute.health')}: </span>, health],
          [<span style={{ fontWeight: 'bold' }}>{t('attribute.mana')}: </span>, mana],
          [<span style={{ fontWeight: 'bold' }}>{t('attribute.damage')}: </span>, damage],
          [<span style={{ fontWeight: 'bold' }}>{t('attribute.defense')}: </span>, defense],
          [<span style={{ fontWeight: 'bold' }}>{t('attribute.crit_chance')}: </span>, critChance],
        ]}
      />
    </Card>
  );
};

export default ClassCard;
