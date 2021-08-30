import axios from 'axios';
import errors from './errors';

const nameHistory = async (uuid: string) => {
  try {
    const res = await axios.get(`https://api.mojang.com/user/profiles/${uuid}/names`);

    return res;
  } catch (error) {
    return errors.errorHandler(error);
  }
};

export default {
  nameHistory,
};
