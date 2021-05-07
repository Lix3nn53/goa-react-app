import React, { FunctionComponent, ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Data from '../Pages/Pages';

interface RouteParams {
  subId0: string;
  subId1: string;
  subId2: string;
}

export type Pages = {
  name: string;
  id: string;
  component?: ReactNode;
  subroute?: Array<Pages>;
};

const GuideSubrouteSubroute: FunctionComponent = () => {
  const { subId0, subId1, subId2 } = useParams<RouteParams>();
  const { t } = useTranslation();

  // console.log(subId0, subId1);

  const topic: Pages | undefined = Data.find(({ id }) => id === subId0);

  const subTopic = topic?.subroute?.find(({ id }) => id === subId1);

  if (subTopic == null) return <h2>Error GuideSubrouteSubroute 1</h2>;

  const subSubTopic = subTopic?.subroute?.find(({ id }) => id === subId2);

  if (subSubTopic == null) return <h2>Error GuideSubrouteSubroute 2</h2>;

  const renderComponent = () => {
    return subSubTopic.component;
  };

  return (
    <div className="guideSubroute">
      <h1>{t(subSubTopic.name)}</h1>
      {renderComponent()}
    </div>
  );
};

export default GuideSubrouteSubroute;
