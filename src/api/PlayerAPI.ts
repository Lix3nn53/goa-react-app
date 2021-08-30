import api from './api';
import errors from './errors';

const playerInfo = async () => {
  try {
    const res = await api.get('/players/info');

    return res;
  } catch (error) {
    return errors.errorHandler(error);
  }
};

export default {
  playerInfo,
};
