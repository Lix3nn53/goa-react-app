import React, { FunctionComponent, ReactNode } from 'react';

import Card from '../../../../components/Card';
import Table from '../../../../components/Table';

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

const GuidePageComponent: FunctionComponent<Props> = ({
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
        alt="icondragonslayer"
        style={{ imageRendering: 'crisp-edges', width: '150px', margin: 'auto' }}
      />
      <Table
        style={{ paddingTop: '20px' }}
        cells={[
          [<span style={{ fontWeight: 'bold' }}>Class Tier: </span>, classTier],
          [<span style={{ fontWeight: 'bold' }}>Main Element: </span>, element],
        ]}
      />
      <h3 style={{ textAlign: 'center' }}>Weapons</h3>
      <Table cells={[renderWeapons()]} />
      <h3 style={{ textAlign: 'center' }}>Armors</h3>
      <Table cells={[renderArmors()]} />
      <h3 style={{ textAlign: 'center' }}>Attributes</h3>
      <Table
        cells={[
          [<span style={{ fontWeight: 'bold' }}>Damage: </span>, damage],
          [<span style={{ fontWeight: 'bold' }}>Defense: </span>, defense],
          [<span style={{ fontWeight: 'bold' }}>Health: </span>, health],
          [<span style={{ fontWeight: 'bold' }}>Mana: </span>, mana],
        ]}
      />
    </Card>
  );
};

export default GuidePageComponent;
