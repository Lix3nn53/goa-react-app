import { combineReducers } from 'redux';

import userReducer from './userReducer';
import mcUsernameReducer from './mcUsernameReducer';

export default combineReducers({
  user: userReducer,
  mc_username: mcUsernameReducer,
});
