import axios from 'axios';

const userInfo = async (accessToken: string) => {
  try {
    const res = await axios.get('/v1/users/info', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data;
  } catch (error) {
    if (error.response) {
      return { error: error.response };
    }

    return { error: true };
  }
};

export default {
  userInfo,
};
