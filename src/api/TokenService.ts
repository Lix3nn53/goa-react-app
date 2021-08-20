const getLocalAccessToken = (): string | null => {
  const accessToken = window.localStorage.getItem('accessToken');
  return accessToken;
};

const getLocalRefreshToken = (): string | null => {
  const refreshToken = window.localStorage.getItem('refreshToken');
  return refreshToken;
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
