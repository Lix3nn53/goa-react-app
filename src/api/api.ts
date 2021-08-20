import axios from 'axios';
import TokenService from './TokenService';

const instance = axios.create({
  baseURL: 'http://localhost:8080/v1',
});

instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      /* eslint-disable-next-line no-param-reassign */
      config.headers.Authorization = `Bearer ${token}`; // for Spring Boot back-end
      // config.headers['x-access-token'] = token; // for Node.js Express back-end
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig.retried) {
        TokenService.removeLocalAccessToken();
        originalConfig.retried = true;

        const token = TokenService.getLocalRefreshToken();

        if (!token) {
          return Promise.reject(new Error('no local refresh token'));
        }

        try {
          const rs = await instance.get('/auth/refresh_token', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          TokenService.setLocalAccessToken(rs.data.access_token);

          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  },
);

export default instance;
