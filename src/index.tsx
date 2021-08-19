import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// redux imports
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './store/reducers';

import App from './App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const Root: FunctionComponent = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
