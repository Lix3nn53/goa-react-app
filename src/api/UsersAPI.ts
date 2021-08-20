import api from './api';

const userInfo = async () => {
  try {
    const res = await api.get('/users/info');

    return res;
  } catch (error) {
    if (error.response) {
      return false;
    }

    return false;
  }
};

export default {
  userInfo,
};
