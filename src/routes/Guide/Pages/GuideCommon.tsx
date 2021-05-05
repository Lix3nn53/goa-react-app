import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

export type Props = {
  headers?: Array<string>;
  paragraphs: Array<string>;
};

const GuideCommon: FunctionComponent<Props> = ({ headers, paragraphs }) => {
  const { t } = useTranslation();

  const renderContent = () => {
    const list = [];

    list.push(
      <div>
        <p>{t(paragraphs[0])}</p>
      </div>,
    );

    if (headers) {
      /* eslint-disable-next-line no-plusplus */
      for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        const paragraph = paragraphs[i + 1];
        list.push(
          <div>
            <h2>{t(header)}</h2>
            <p>{t(paragraph)}</p>
          </div>,
        );
      }
    }

    return list;
  };

  return <div>{renderContent()}</div>;
};

export default GuideCommon;
