import React, { FC } from 'react';

import './Loading.scss';

const Loading: FC = () => (
  <div className="flex-container loader-bars">
    <div className="flex-item loader-bar" />
    <div className="flex-item loader-bar" />
    <div className="flex-item loader-bar" />
    <div className="flex-item loader-bar" />
    <div className="flex-item loader-bar" />
    <div className="flex-item loader-bar" />
    <div className="flex-item loader-bar" />
    <div className="flex-item loader-bar" />
  </div>
);

export default Loading;
