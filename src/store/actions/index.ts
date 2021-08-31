import types from './types';

import UserAPI from '../../api/UsersAPI';
import MojangAPI from '../../api/MojangAPI';

import errors from '../../api/errors';

const { FETCH_USER } = types;
const { FETCH_MC_USERNAME } = types;

const fetchUser = () => async (dispatch: any) => {
  try {
    const response = await UserAPI.userInfo();

    let value = false;
    if (!errors.isError(response)) {
      value = response.data;
      console.log('fetchUser', response.data);
    }

    dispatch({ type: FETCH_USER, payload: value });
    return;
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    }
  }

  dispatch({ type: FETCH_USER, payload: null });
};

const fetchMcUsername = (uuid: string) => async (dispatch: any) => {
  try {
    const response = await MojangAPI.nameHistory(uuid);

    console.log(response);

    let value = false;
    if (!errors.isError(response)) {
      value = response.data[0].name;
    }

    dispatch({ type: FETCH_MC_USERNAME, payload: value });
    return;
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    }
  }

  dispatch({ type: FETCH_MC_USERNAME, payload: null });
};

export default {
  fetchUser,
  fetchMcUsername,
};
