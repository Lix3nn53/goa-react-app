import React, { FC, useEffect, useState, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import Table from '../../components/Table';
import Loading from '../../components/Loading';

import './Characters.css';

import CharacterAPI from '../../api/CharacterAPI';
import errors from '../../api/errors';

interface ICharacter {
  character_no: string;
  chat_tag: string;
  crafting_expreriences: string;
  turnedinquests: string;
  activequests: string;
  rpg_class: string;
  unlocked_classes: string;
  totalexp: string;
}

const Characters: FC = () => {
  const [characters, setCharacters] = useState<ICharacter[]>();

  const user = useSelector((state: any) => state.user);
  const { t } = useTranslation();

  useEffect(() => {
    if (!user) return;

    async function fetchCharacters() {
      const response = await CharacterAPI.characterInfo();

      if (errors.isError(response)) return;

      setCharacters(response.data);
    }

    fetchCharacters();
  }, [user]);

  if (user == null) return <Loading />;

  const renderCharacters = () => {
    const list: Array<ReactNode> = [];

    if (characters == null) return list;

    characters.forEach((str, index) => {
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
    <div className="flex-container column characters-page">
      <h2>Characters</h2>
      <Table
        cells={[renderCharacters()]}
        headers={[
          <span style={{ fontWeight: 'bold' }}>No</span>,
          <span style={{ fontWeight: 'bold' }}>{t('classes.total_exp')}</span>,
          <span style={{ fontWeight: 'bold' }}>{t('guide.classes.subject')}</span>,
          <span style={{ fontWeight: 'bold' }}>{t('classes.unlocked')}</span>,
          <span style={{ fontWeight: 'bold' }}>Chat Tag</span>,
          <span style={{ fontWeight: 'bold' }}>{t('crafting.subject')}</span>,
          <span style={{ fontWeight: 'bold' }}>
            {t('quest.turnedin')} {t('quest.subject')}
          </span>,
          <span style={{ fontWeight: 'bold' }}>
            {t('quest.active')} {t('quest.subject')}
          </span>,
        ]}
      />
    </div>
  );
};

export default Characters;
