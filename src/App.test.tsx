import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import App from './App';
import Routes from './routes';

it('has a header', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

  expect(wrapper.find('header').exists()).toBe(true);
});

it('has a footer', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

  expect(wrapper.find('footer').exists()).toBe(true);
});

it('contains routes', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

  expect(wrapper.containsMatchingElement(<Routes />)).toBe(true);
});
