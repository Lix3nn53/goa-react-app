import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../../components/Gallery';

import './Items.css';

const ClassesIntro: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('item.guide.p0')}</p>
        <h2>
          <span>{t('item.guide.h1')}</span>
        </h2>
        <p>{t('item.guide.p1.part1')}</p>
        <ul>
          <li>{t('item.guide.p1.part2')}</li>
          <li>{t('item.guide.p1.part3')}</li>
          <li>{t('item.guide.p1.part4')}</li>
        </ul>
        <h2>
          <span>{t('item.guide.h2')}</span>
        </h2>
        <p>
          {t('item.guide.p2')}
          <a href="https://sketchfab.com/Lix3nn/models" target="_blank" rel="noreferrer">
            https://sketchfab.com/Lix3nn/models
          </a>
        </p>
        <h2 style={{ paddingBottom: '16px' }}>
          <span>Gallery</span>
        </h2>
        <Gallery
          pictures={[
            {
              src: 'https://media.giphy.com/media/1mhU3YqvhgLv2utfKv/giphy.gif',
              name: 'Great  Sword',
              description: 'Great  Sword',
            },
            {
              src: 'https://media.giphy.com/media/8YKZGnI8Eb6qD83tLa/giphy.gif',
              name: 'Staff',
              description: 'Staff',
            },
            {
              src: 'https://media.giphy.com/media/5nbDogvtGpAtQBsaMF/giphy.gif',
              name: 'Wand',
              description: 'Wand',
            },
            {
              src: 'https://media.giphy.com/media/QZVdlEQuLzxLlTdCGl/giphy.gif',
              name: 'Spear',
              description: 'Spear',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ClassesIntro;
