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
  damage: number;
  defense: number;
  health: number;
  mana: number;
};

const ClassCard: FunctionComponent<Props> = ({
  name,
  icon,
  classTier,
  element,
  weapons,
  armors,
  damage,
  defense,
  health,
  mana,
}) => {
  const { t } = useTranslation();

  const renderWeapons = () => {
    const list: Array<ReactNode> = [];

    weapons.forEach((str) => {
      list.push([<span style={{ fontWeight: 'bold' }}>{str}</span>]);
    });

    return list;
  };

  const renderArmors = () => {
    const list: Array<ReactNode> = [];

    armors.forEach((str) => {
      list.push([<span style={{ fontWeight: 'bold' }}>{str}</span>]);
    });

    return list;
  };

  return (
    <Card header={<h2>{name}</h2>}>
      <img
        src={icon}
        alt="icon"
        style={{ imageRendering: 'crisp-edges', width: '150px', margin: 'auto' }}
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
      <h3 style={{ textAlign: 'center' }}>Attributes</h3>
      <Table
        cells={[
          [<span style={{ fontWeight: 'bold' }}>{t('attribute.health')}: </span>, health],
          [<span style={{ fontWeight: 'bold' }}>{t('attribute.mana')}: </span>, mana],
          [<span style={{ fontWeight: 'bold' }}>{t('attribute.damage')}: </span>, damage],
          [<span style={{ fontWeight: 'bold' }}>{t('attribute.defense')}: </span>, defense],
        ]}
      />
    </Card>
  );
};

export default ClassCard;
