// vendor
import axios from 'axios';

// Storage Service
import storageService from 'src/utils/storage-service';

// constants
import { LOGIN } from 'src/constants/routes.constants';
import { TOKEN_EXPIRED } from 'src/constants/storage.constants';
import { LOGIN_ENDPOINT, REFRESH_TOKEN_ENDPOINT } from 'src/constants/api-endpoints.constants';

// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  baseURL: process.env.REACT_APP_ACCESS_URL,
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = storageService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401) {
      if (originalRequest.url === LOGIN_ENDPOINT) {
        return Promise.reject(error);
      }

      if (error.response.data.code === TOKEN_EXPIRED && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = storageService.getRefreshToken();
        return instance
          .post(REFRESH_TOKEN_ENDPOINT, {
            refresh: refreshToken,
          })
          .then((res) => {
            storageService.setAccessToken(res.data?.token);
            instance.defaults.headers.common.Authorization = `Bearer ${storageService.getAccessToken()}`;
            return instance(originalRequest);
          });
      }
      storageService.clearToken();
      window.location.assign(`/#${LOGIN}?isLogout=1`);
    }

    return Promise.reject(error);
  }
);

export default instance;
