import axios from 'axios';

const nameHistory = async (uuid: string) => {
  try {
    const res = await axios.get(`https://api.mojang.com/user/profiles/${uuid}/names`);

    return res;
  } catch (error) {
    if (error.response) {
      return false;
    }

    return false;
  }
};

export default {
  nameHistory,
};
