import types from './types';
import UserAPI from '../../api/UsersAPI';

const { FETCH_USER } = types;

const fetchUser = () => async (dispatch: any) => {
  try {
    const res = await UserAPI.userInfo();

    let userData = false;
    if (res) {
      userData = res.data;
      console.log('fetchUser', res.data);
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
