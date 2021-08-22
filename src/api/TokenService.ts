const getLocalAccessToken = (): string | null => {
  return window.localStorage.getItem('accessToken');
};

const getLocalRefreshToken = (): string | null => {
  return window.localStorage.getItem('refreshToken');
};

const setLocalAccessToken = (accessToken: string) => {
  window.localStorage.setItem('accessToken', accessToken);
};

const setLocalRefreshToken = (refreshToken: string) => {
  window.localStorage.setItem('refreshToken', refreshToken);
};

const removeLocalAccessToken = () => {
  window.localStorage.removeItem('accessToken');
};

const removeLocalRefreshToken = () => {
  window.localStorage.removeItem('refreshToken');
};

export default {
  getLocalAccessToken,
  getLocalRefreshToken,
  setLocalAccessToken,
  setLocalRefreshToken,
  removeLocalAccessToken,
  removeLocalRefreshToken,
};
