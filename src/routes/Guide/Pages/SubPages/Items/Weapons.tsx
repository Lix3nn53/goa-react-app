import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Table from '../../../../../components/Table';

const Weapons: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div className="items" style={{ flex: '10' }}>
        <p>{t('item.guide.weapon.p0')}</p>
        <h2>
          <span>{t('item.guide.weapon.h1')}</span>
        </h2>
        <p>{t('item.guide.weapon.p1')}</p>
        <Table
          headers={[
            <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.type')}</span>,
            <span style={{ fontWeight: 'bold' }}>
              <span role="img" aria-label="Crossed Swords">
                ⚔️
              </span>{' '}
              {t('attribute.damage')}
            </span>,
            <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.speed')}</span>,
            <span style={{ fontWeight: 'bold' }}>☆ {t('attribute.crit_chance')}</span>,
            <span style={{ fontWeight: 'bold' }}>
              <span role="img" aria-label="Bow">
                🏹
              </span>{' '}
              {t('item.guide.weapon.range')}
            </span>,
            <span style={{ fontWeight: 'bold' }}>+ {t('item.guide.weapon.bonus')}</span>,
          ]}
          cells={[
            [
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.sword.h')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.sword.damage')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.sword.speed')}</span>,
              <span style={{ fontWeight: 'bold' }}>
                {t('item.guide.weapon.sword.crit_chance')}
              </span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.sword.range')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.sword.bonus')}</span>,
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.dagger.h')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.dagger.damage')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.dagger.speed')}</span>,
              <span style={{ fontWeight: 'bold' }}>
                {t('item.guide.weapon.dagger.crit_chance')}
              </span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.dagger.range')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.dagger.bonus')}</span>,
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.battle_axe.h')}</span>,
              <span style={{ fontWeight: 'bold' }}>
                {t('item.guide.weapon.battle_axe.damage')}
              </span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.battle_axe.speed')}</span>,
              <span style={{ fontWeight: 'bold' }}>
                {t('item.guide.weapon.battle_axe.crit_chance')}
              </span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.battle_axe.range')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.battle_axe.bonus')}</span>,
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.war_hammer.h')}</span>,
              <span style={{ fontWeight: 'bold' }}>
                {t('item.guide.weapon.war_hammer.damage')}
              </span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.war_hammer.speed')}</span>,
              <span style={{ fontWeight: 'bold' }}>
                {t('item.guide.weapon.war_hammer.crit_chance')}
              </span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.war_hammer.range')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.war_hammer.bonus')}</span>,
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.great_sword.h')}</span>,
              <span style={{ fontWeight: 'bold' }}>
                {t('item.guide.weapon.great_sword.damage')}
              </span>,
              <span style={{ fontWeight: 'bold' }}>
                {t('item.guide.weapon.great_sword.speed')}
              </span>,
              <span style={{ fontWeight: 'bold' }}>
                {t('item.guide.weapon.great_sword.crit_chance')}
              </span>,
              <span style={{ fontWeight: 'bold' }}>
                {t('item.guide.weapon.great_sword.range')}
              </span>,
              <span style={{ fontWeight: 'bold' }}>
                {t('item.guide.weapon.great_sword.bonus')}
              </span>,
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.spear.h')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.spear.damage')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.spear.speed')}</span>,
              <span style={{ fontWeight: 'bold' }}>
                {t('item.guide.weapon.spear.crit_chance')}
              </span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.spear.range')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.spear.bonus')}</span>,
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.bow.h')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.bow.damage')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.bow.speed')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.bow.crit_chance')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.bow.range')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.bow.bonus')}</span>,
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.crossbow.h')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.crossbow.damage')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.crossbow.speed')}</span>,
              <span style={{ fontWeight: 'bold' }}>
                {t('item.guide.weapon.crossbow.crit_chance')}
              </span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.crossbow.range')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.crossbow.bonus')}</span>,
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.wand.h')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.wand.damage')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.wand.speed')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.wand.crit_chance')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.wand.range')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.wand.bonus')}</span>,
            ],
            [
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.staff.h')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.staff.damage')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.staff.speed')}</span>,
              <span style={{ fontWeight: 'bold' }}>
                {t('item.guide.weapon.staff.crit_chance')}
              </span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.staff.range')}</span>,
              <span style={{ fontWeight: 'bold' }}>{t('item.guide.weapon.staff.bonus')}</span>,
            ],
          ]}
        />
      </div>
    </div>
  );
};

export default Weapons;
