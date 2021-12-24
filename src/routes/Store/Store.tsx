import React, { FunctionComponent } from 'react';

import Card from '../../components/Card';

import './Store.css';
import Subrouter from '../../components/Subrouter';

import StoreSubroute from './StoreSubroute';

import Data from './Pages';

const Register: FunctionComponent = () => (
  <div className="store">
    <Subrouter
      routes={Data}
      subcomponents={[<StoreSubroute />]}
      deep={1}
      classSubrouter="flex-container row"
    >
      <div className="filler-1" />
      <div className="filler-2" />
    </Subrouter>
  </div>
);

export default Register;
