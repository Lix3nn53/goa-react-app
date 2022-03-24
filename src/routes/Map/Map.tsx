import React, { FunctionComponent } from 'react';

import Banner from '../../components/Banner';
import './Map.css';

const Map: FunctionComponent = () => (
  <div className="map-frame-container flex-container column">
    <iframe className="map-frame" title="map" src="https://master.d2esxhypr1dlpv.amplifyapp.com" />
  </div>
);

export default Map;
