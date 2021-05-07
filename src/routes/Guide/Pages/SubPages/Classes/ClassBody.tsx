import React, { FunctionComponent, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import './Classes.css';

export type Props = JSX.IntrinsicElements['div'] & {
  intro: string;
  playstyle: string;
  skillComponent: ReactNode;
};

const ClassBody: FunctionComponent<Props> = ({ intro, playstyle, skillComponent }) => {
  const { t } = useTranslation();

  return (
    <div className="rpgclass">
      <p>{t(intro)}</p>
      <h2>
        <span>{t('classes.playstyle')}</span>
      </h2>
      <p>{t(playstyle)}</p>
      <h2>
        <span>{t('classes.skills')}</span>
      </h2>
      <p>{skillComponent}</p>
    </div>
  );
};

export default ClassBody;
