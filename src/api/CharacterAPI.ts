import api from './api';
import errors from './errors';

const characterInfo = async () => {
  try {
    const res = await api.get('/characters/info');

    return res;
  } catch (error) {
    return errors.errorHandler(error);
  }
};

export default {
  characterInfo,
};
