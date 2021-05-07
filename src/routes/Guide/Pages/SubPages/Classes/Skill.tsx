import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

export type Props = JSX.IntrinsicElements['div'] & {
  icons: Array<string>;
  names: Array<string>;
  descriptions: Array<string>;
};

const Skill: FunctionComponent<Props> = ({ icons, names, descriptions }) => {
  const { t } = useTranslation();

  return (
    <div className="skills">
      <div className="section">
        <h3>1: {names[0]}</h3>
        <div className="flex-container">
          <img src={icons[0]} alt="skill_one" className="pixel-icon" />
          <p>{t(descriptions[0])}</p>
        </div>
      </div>

      <div className="section">
        <h3>2: {names[1]}</h3>
        <div className="flex-container">
          <img src={icons[1]} alt="skill_two" className="pixel-icon" />
          <p>{t(descriptions[1])}</p>
        </div>
      </div>

      <div className="section">
        <h3>3: {names[2]}</h3>
        <div className="flex-container">
          <img src={icons[2]} alt="skill_three" className="pixel-icon" />
          <p>{t(descriptions[2])}</p>
        </div>
      </div>

      <div className="section">
        <h3>Passive: {names[3]}</h3>
        <div className="flex-container">
          <img src={icons[3]} alt="skill_passive" className="pixel-icon" />
          <p>{t(descriptions[3])}</p>
        </div>
      </div>

      <div className="section">
        <h3>Ultimate: {names[4]}</h3>
        <div className="flex-container">
          <img src={icons[4]} alt="skill_ultimate" className="pixel-icon" />
          <p>{t(descriptions[4])}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
