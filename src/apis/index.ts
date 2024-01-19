import axios from 'axios';
import { getCookie, setCookie } from '@/util/cookie';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/auth';

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
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

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
    const refreshToken = getCookie(REFRESH_TOKEN);

    // refresh token을 body에 넣어 -> access token 재발급
    if (errorStatus === 401) {
      try {
        const res = await axiosDefault.post('/members/reissue', {
          refreshToken: `Bearer ${refreshToken}`
        });
        const newAccessToken = res.data.accessToken;
        const newRefreshToken = res.data.refreshToken;
        localStorage.setItem(ACCESS_TOKEN, newAccessToken);
        setCookie(REFRESH_TOKEN, newRefreshToken, {
          path: '/'
        });

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return await axios(originalRequest);
      } catch (err) {
        alert('토큰 재발급이 되지 않았습니다. 다시 로그인 해주세요');
        window.location.replace('/auth');
      }
    }
    // 에러 반환.
    return Promise.reject(error);
  }
);
