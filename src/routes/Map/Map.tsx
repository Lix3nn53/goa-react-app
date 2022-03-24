import React, { FunctionComponent } from 'react';

import Banner from '../../components/Banner';
import './Map.css';

const Map: FunctionComponent = () => (
  <div className="map-frame-container flex-container column">
    <iframe className="map-frame" title="map" src="./mapframe/index.html" />
  </div>
);

export default Map;
