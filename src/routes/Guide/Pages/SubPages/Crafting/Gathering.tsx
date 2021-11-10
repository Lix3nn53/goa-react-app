import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Link from '../../../../../components/Link';
import Gallery from '../../../../../components/Gallery';

const Gathering: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('crafting.guide.gathering.p0')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src: 'https://media.giphy.com/media/ptyfS1B477AGZ0pQhC/giphy.gif',
              name: 'Gathering GIF',
              description: 'Gathering a copper ore.',
            },
          ]}
        />
        <h2>
          <span>{t('crafting.guide.gathering.h1')}</span>
        </h2>
        <p>{t('crafting.guide.gathering.p1')}</p>
        <h4>
          <span>{t('crafting.guide.gathering.tools.h1')}</span>
        </h4>
        <p>{t('crafting.guide.gathering.tools.p1')}</p>
        <h4>
          <span>{t('crafting.guide.gathering.tools.h2')}</span>
        </h4>
        <p>{t('crafting.guide.gathering.tools.p2')}</p>
        <h4>
          <span>{t('crafting.guide.gathering.tools.h3')}</span>
        </h4>
        <p>{t('crafting.guide.gathering.tools.p3')}</p>
        <h4>
          <span>{t('crafting.guide.gathering.tools.h4')}</span>
        </h4>
        <p>{t('crafting.guide.gathering.tools.p4')}</p>
        <h4>
          <span>{t('crafting.guide.gathering.tools.h5')}</span>
        </h4>
        <p>{t('crafting.guide.gathering.tools.p5')}</p>
      </div>
    </div>
  );
};

export default Gathering;
