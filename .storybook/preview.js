import React from 'react';

import '../src/styles/index.css';

export const parameters = {
  // automatically create action args for all props that start with "on"
  actions: { argTypesRegex: '^on.*' },
  dependencies: {
    // display only dependencies/dependents that have a story in storybook
    // by default this is false
    withStoriesOnly: true,

    // completely hide a dependency/dependents block if it has no elements
    // by default this is false
    hideEmpty: true,
  },
};

const withGlobalStyle = (storyFn) => (
  <div id="fullpage" className="fullpage flex-container column" data-theme="dark">
    <header style={{ flex: '0' }} />

    <main id="content" className="main-content" style={{ flex: '1' }}>
      <div>{storyFn()}</div>
    </main>

    <div style={{ flex: '0' }}>
      <footer />
    </div>
  </div>
);

export const decorators = [withGlobalStyle];
