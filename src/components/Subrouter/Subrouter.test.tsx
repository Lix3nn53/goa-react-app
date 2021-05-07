import React, { FunctionComponent } from 'react';
import { shallow } from 'enzyme';

import Subrouter from './Subrouter';

interface RouteParams {
  subId: string;
}

const Subcomponent: FunctionComponent = () => {
  return <div>Subcomponent</div>;
};

it('renders correctly Subrouter', () => {
  const wrapper = shallow(
    <Subrouter
      routes={[
        { name: 'One', id: 'one' },
        { name: 'Two', id: 'two' },
      ]}
      subcomponents={[Subcomponent]}
      deep={3}
    >
      Subrouter
    </Subrouter>,
  );

  expect(wrapper).toMatchSnapshot();
});
