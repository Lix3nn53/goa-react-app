import types from './types';
import UserAPI from '../../api/UsersAPI';
import errors from '../../api/errors';

const { FETCH_USER } = types;

const fetchUser = () => async (dispatch: any) => {
  try {
    const response = await UserAPI.userInfo();

    let userData = false;
    if (!errors.isError(response)) {
      userData = response.data;
      console.log('fetchUser', response.data);
    }

    dispatch({ type: FETCH_USER, payload: userData });
    return;
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    }
  }

  dispatch({ type: FETCH_USER, payload: null });
};

export default {
  fetchUser,
};
