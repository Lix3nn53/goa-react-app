import api from './api';
import TokenService from './TokenService';

const logout = async () => {
  try {
    const res = await api.get(`/auth/logout`);
    TokenService.removeLocalAccessToken();
    TokenService.removeLocalRefreshToken();

    return res;
  } catch (error) {
    if (error.response) {
      return { error: error.response };
    }

    return { error: true };
  }
};

const handleAuthResponse = (res: any) => {
  if (res.data.refresh_token && res.data.access_token) {
    TokenService.setLocalAccessToken(res.data.access_token);
    TokenService.setLocalRefreshToken(res.data.refresh_token);

    return { error: false };
  }
  return { error: res.error };
};

const googleAuth = async (params: any) => {
  try {
    const res = await api.get(`/auth/google${params}`);
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
  logout,
  googleAuth,
};
