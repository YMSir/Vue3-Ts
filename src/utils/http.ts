/**
 * Created by Yes.Man on 2021/8/27 10:01.
 * @file: http
 */

import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

const http = axios.create({
  // baseURL: NODE_ENV.BASE_URL
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
