/**
 * Created by Yes.Man on 2021/8/27 10:01.
 * @file: http
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

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
  (config: AxiosResponse<any>) => {
    return config;
  },

  error => {
    return Promise.reject(error);
  }
);

export default http;
