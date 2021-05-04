import React from 'react';
import { shallow } from 'enzyme';

import Gallery from './Gallery';

it('renders correctly primary button', () => {
  const wrapper = shallow(
    <Gallery
      pictures={[
        { src: 'https://www.w3schools.com/howto/img_lights_wide.jpg', name: 'img_lights_wide' },
        { src: 'https://www.w3schools.com/howto/img_nature_wide.jpg', name: 'img_nature_wide' },
        { src: 'https://www.w3schools.com/howto/img_snow_wide.jpg', name: 'img_snow_wide' },
        {
          src: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
          name: 'img_mountains_wide',
        },
      ]}
    />,
  );

  expect(wrapper).toMatchSnapshot();
});
