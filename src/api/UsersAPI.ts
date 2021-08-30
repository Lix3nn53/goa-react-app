import api from './api';
import errors from './errors';

const userInfo = async () => {
  try {
    const res = await api.get('/users/info');

    return res;
  } catch (error) {
    return errors.errorHandler(error);
  }
};

export default {
  userInfo,
};
