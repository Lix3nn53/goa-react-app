import React, { FC } from 'react';

import './Loading.css';

const Loading: FC = () => (
  <div className="loader-bars flex-container">
    <div className="loader-bar" />
    <div className="loader-bar" />
    <div className="loader-bar" />
    <div className="loader-bar" />
    <div className="loader-bar" />
    <div className="loader-bar" />
    <div className="loader-bar" />
    <div className="loader-bar" />
  </div>
);

export default Loading;
