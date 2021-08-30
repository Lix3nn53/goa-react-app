import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import dailyImage from '../../img/player/daily.png';
import rankImage from '../../img/player/rank.png';

import Card from '../../components/Card';
import Loading from '../../components/Loading';

import './Player.css';

import PlayerAPI from '../../api/PlayerAPI';
import errors from '../../api/errors';

interface IPlayer {
  uuid: string;
  daily_last_date: string;
  staff_rank: string;
  premium_rank: string;
  premium_rank_date: string;
}

const Player: FC = () => {
  const [player, setPLayer] = useState<IPlayer>();

  const user = useSelector((state: any) => state.user);
  const { t } = useTranslation();

  useEffect(() => {
    if (!user) return;

    async function fetchPlayer() {
      const response = await PlayerAPI.playerInfo();

      if (errors.isError(response)) return;

      setPLayer(response.data);
    }

    fetchPlayer();
  }, [user]);

  if (user == null) return <Loading />;

  const renderRank = () => {
    if (player == null) return <p>None</p>;

    return <p>{player.premium_rank}</p>;
  };

  return (
    <div className="flex-container player-page">
      <Card
        header={
          <h3 className="card-title">
            <img
              src={dailyImage}
              alt="daily"
              className="pixel-icon"
              style={{ width: '150px', margin: 'auto' }}
            />
            {t('player.daily_reward')}
          </h3>
        }
        width="small"
      >
        <p>Ready!</p>
      </Card>
      <Card
        header={
          <h3 className="card-title">
            <img
              src={rankImage}
              alt="rank"
              className="pixel-icon"
              style={{ width: '150px', margin: 'auto' }}
            />
            <p>{t('player.rank')}</p>
          </h3>
        }
        width="small"
      >
        {renderRank()}
        <p>30 days 16 hours 22 minutes 58 seconds</p>
      </Card>
    </div>
  );
};

export default Player;
