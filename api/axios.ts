import axios from 'axios';

import config from '../config';
import { getTokenInfo } from '../auth';

const axiosInstance = axios.create({
  baseURL: `${config.ct.api}/${config.ct.auth.projectKey}`,
});

axiosInstance.interceptors.request.use(
  request => request,
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const accessToken = await getTokenInfo();
      console.log('RETRYING.....', accessToken);
      error.config.headers['Authorization'] = `Bearer ${accessToken}`;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
