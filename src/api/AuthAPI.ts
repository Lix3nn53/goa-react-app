import api from './api';
import errors from './errors';
import TokenService from './TokenService';

const logout = async () => {
  try {
    const res = await api.get(`/auth/logout`);
    TokenService.removeLocalAccessToken();
    TokenService.removeLocalRefreshToken();

    return res;
  } catch (error) {
    TokenService.removeLocalAccessToken();
    TokenService.removeLocalRefreshToken();

    return errors.errorHandler(error);
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
    return errors.errorHandler(error);
  }
};

const twitchAuth = async (params: any) => {
  try {
    const res = await api.get(`/auth/twitch${params}`);
    console.log(res.data);

    return handleAuthResponse(res);
  } catch (error) {
    return errors.errorHandler(error);
  }
};

const discordAuth = async (params: any) => {
  try {
    const res = await api.get(`/auth/discord${params}`);
    console.log(res.data);

    return handleAuthResponse(res);
  } catch (error) {
    return errors.errorHandler(error);
  }
};

const minecraftAuth = async (params: any) => {
  try {
    const res = await api.get(`/auth/minecraft${params}`);
    console.log(res.data);

    return handleAuthResponse(res);
  } catch (error) {
    return errors.errorHandler(error);
  }
};

export default {
  logout,
  googleAuth,
  twitchAuth,
  discordAuth,
  minecraftAuth,
};
