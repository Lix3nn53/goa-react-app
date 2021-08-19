import axios from 'axios';

const handleAuthResponse = (res: any) => {
  if (res.data.refresh_token && res.data.access_token) {
    localStorage.setItem('refresh_token', res.data.refresh_token);
    localStorage.setItem('access_token', res.data.access_token);

    return { error: false };
  }
  return { error: res.error };
};

const googleAuth = async (params: any) => {
  try {
    const res = await axios.get(`/v1/auth/google${params}`);
    console.log(res.data);

    return handleAuthResponse(res);
  } catch (error) {
    if (error.response) {
      return { error: error.response };
    }

    return { error: true };
  }
};

export default {
  googleAuth,
};
