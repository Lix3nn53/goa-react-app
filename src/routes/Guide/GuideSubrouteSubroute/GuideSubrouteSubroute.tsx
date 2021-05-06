import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Data from '../Pages/Pages';

interface RouteParams {
  subId0: string;
  subId1: string;
}

const GuideSubrouteSubroute: FunctionComponent = () => {
  const { subId0, subId1 } = useParams<RouteParams>();
  const { t } = useTranslation();

  // console.log(subId0, subId1);

  const topic = Data.find(({ id }) => id === subId0);

  const subTopic = topic?.subroute?.find(({ id }) => id === subId1);

  if (subTopic == null) return <h2>Error SubrouteSubroute</h2>;

  const renderComponent = () => {
    return subTopic.component;
  };

  return (
    <div className="guideSubroute">
      <h1>{t(subTopic.name)}</h1>
      {renderComponent()}
    </div>
  );
};

export default GuideSubrouteSubroute;
