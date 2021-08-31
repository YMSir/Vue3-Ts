/**
 * Created by Yes.Man on 2021/8/27 10:01.
 * @file: http
 */

import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 6 * 1000
});

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },

  error => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res: AxiosResponse<any>) => {
    return res.data;
  },

  error => {
    return Promise.reject(error);
  }
);

export default http;
