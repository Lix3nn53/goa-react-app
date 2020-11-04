import React, { FC } from 'react';

import './Loading.scss';

const Loading: FC = () => (
  <div className="loader-bars flex-container">
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
