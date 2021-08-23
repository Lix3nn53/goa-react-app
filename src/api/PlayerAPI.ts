import api from './api';

const playerInfo = async () => {
  try {
    const res = await api.get('/players/info');

    return res;
  } catch (error) {
    if (error.response) {
      return false;
    }

    return false;
  }
};

export default {
  playerInfo,
};
