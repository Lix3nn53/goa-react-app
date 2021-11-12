import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

import Gallery from '../../../../components/Gallery';
import Table from '../../../../components/Table';

const Revive: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="guide-page flex-container row-reverse">
      <div style={{ flex: '10' }}>
        <p>{t('revive.guide.p0')}</p>
        <Gallery
          size="small"
          pictures={[
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908739209026740254/unknown.png',
              name: 'Soul Choice',
              description: 'Soul Choice',
            },
            {
              src:
                'https://cdn.discordapp.com/attachments/689660026423345188/908739337884143626/unknown.png',
              name: 'Tomb',
              description: 'Tomb',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Revive;
