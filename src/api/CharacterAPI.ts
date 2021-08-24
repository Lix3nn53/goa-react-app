import api from './api';

const characterInfo = async () => {
  try {
    const res = await api.get('/characters/info');

    return res;
  } catch (error) {
    if (error.response) {
      return false;
    }

    return false;
  }
};

export default {
  characterInfo,
};
