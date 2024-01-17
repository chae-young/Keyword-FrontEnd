import axios from 'axios';
import { getCookie, setCookie } from '@/util/cookie';

// export const BASE_URL = 'http://localhost:5173';
export const BASE_URL = import.meta.env.VITE_SERVER;

export const axiosDefault = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

axiosAuth.interceptors.request.use(
  config => {
    const copyConfig = { ...config };
    if (!config.headers) return config;
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken && config.headers) {
      // access token을 header에 담아 요청
      copyConfig.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosAuth.interceptors.response.use(
  response => response,
  async error => {
    console.log(error);
    // const errorMessage = error.response.data.message;
    const errorStatus = error.response.status;
    const originalRequest = error.config;
    const refreshToken = getCookie('refreshToken');

    // refresh token을 body에 넣어 -> access token 재발급
    if (errorStatus === 401) {
      const res = await axios.post('/members/reissue', {
        refreshToken: `Bearer ${refreshToken}`
      });

      const newAccessToken = res.data.accessToken;
      const newRefreshToken = res.data.refreshToken;
      localStorage.setItem('accessToken', newAccessToken);
      setCookie('refreshToken', newRefreshToken, {
        path: '/'
      });

      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return axios(originalRequest);
    }
  }
);
