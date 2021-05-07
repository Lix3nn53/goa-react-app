import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../components/Gallery';
import Table from '../../../../components/Table';

const Skills: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '2' }}>
        <p>{t('attribute.guide.p0')}</p>
        <h2>{t('attribute.guide.h1')}</h2>
        <Table
          style={{ padding: '20px 0' }}
          cells={[
            [
              <span style={{ fontWeight: 'bold' }}>{t('attribute.health')}: </span>,
              t('attribute.guide.table.health'),
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('attribute.mana')}: </span>,
              t('attribute.guide.table.mana'),
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('attribute.damage')}: </span>,
              t('attribute.guide.table.damage'),
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('attribute.defense')}: </span>,
              t('attribute.guide.table.defense'),
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('attribute.crit_chance')}: </span>,
              t('attribute.guide.table.crit_chance'),
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('attribute.crit_damage')}: </span>,
              t('attribute.guide.table.crit_damage'),
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('attribute.ability_haste')}: </span>,
              t('attribute.guide.table.ability_haste'),
            ],
          ]}
        />
        <h2>{t('attribute.guide.h2')}</h2>
        <p>{t('attribute.guide.p2')}</p>
        <p>
          <span style={{ padding: '0 4px' }}>{t('element.fire')}</span>
          <span style={{ padding: '0 4px' }}>{t('element.water')}</span>
          <span style={{ padding: '0 4px' }}>{t('element.earth')}</span>
          <span style={{ padding: '0 4px' }}>{t('element.lightning')}</span>
          <span style={{ padding: '0 4px' }}>{t('element.air')}</span>
        </p>
        <h2>{t('attribute.guide.h3')}</h2>
        <p>
          {t('attribute.guide.p3.text1')}
          {t('element.fire')}
        </p>
        <Table
          cells={[
            [
              <span style={{ fontWeight: 'bold' }}>{t('attribute.guide.p3.text2.part1')}</span>,
              <span>
                {t('attribute.guide.p3.text2.part2')}
                {t('element.fire')}
                {t('attribute.guide.p3.text2.part3')}
              </span>,
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('attribute.guide.p3.text3.part1')}</span>,
              <span>
                {t('attribute.guide.p3.text3.part2')}
                {t('element.fire')}
                {t('attribute.guide.p3.text3.part3')}
              </span>,
            ],
          ]}
        />
        <Gallery
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/840015382706389022/unknown.png',
              name: 'Step 1: Open the Menu',
              description: 'Step 1: Open RPG Inventory',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/824373707593220168/unknown.png',
              name: 'Step 2: Click on Character',
              description: 'Step 2: Hover on player head',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
