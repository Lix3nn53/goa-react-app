import api from './api';
import errors from './errors';

// const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const nameHistory = async (uuid: string) => {
  // await delay(2000);

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
