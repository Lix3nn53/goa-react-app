import types from './types';
import UserAPI from '../../api/UsersAPI';

const { FETCH_USER } = types;

const fetchUser = () => async (dispatch: any) => {
  const accessToken = localStorage.getItem('access_token');

  console.log('accessToken');
  console.log(accessToken);

  if (accessToken) {
    try {
      const res = await UserAPI.userInfo(accessToken);

      const userData = res.data;

      dispatch({ type: FETCH_USER, payload: userData });
      return;
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  }

  dispatch({ type: FETCH_USER, payload: null });
};

export default {
  fetchUser,
};
