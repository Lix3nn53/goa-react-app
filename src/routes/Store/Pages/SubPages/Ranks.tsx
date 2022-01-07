import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import './Ranks.css';
import Card from '../../../../components/Card';
import Button from '../../../../components/Button';
import RankCard from './RankCard';
import imgHero from '../../../../img/store/rank_hero.png';

const Ranks: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="ranks flex-container row">
      <RankCard rank="VIP" price="4.00" chat_tag={<img src={imgHero} alt="vip" />} bonus_slot="1" />
      <RankCard
        rank="HERO"
        price="9.00"
        chat_tag={<img src={imgHero} alt="vip" />}
        bonus_slot="3"
      />
      <RankCard
        rank="LEGEND"
        price="19.00"
        chat_tag={<img src={imgHero} alt="vip" />}
        bonus_slot="5"
      />
      <RankCard
        rank="TITAN"
        price="39.00"
        chat_tag={<img src={imgHero} alt="vip" />}
        bonus_slot="7"
      />
    </div>
  );
};

export default Ranks;
