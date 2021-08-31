import api from './api';
import errors from './errors';

const nameHistory = async (uuid: string) => {
  try {
    const res = await api.post(`/mojang/profiles`, { uuid });

    return res;
  } catch (error) {
    return errors.errorHandler(error);
  }
};

export default {
  nameHistory,
};
