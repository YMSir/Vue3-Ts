/**
 * Created by Yes.Man on 2021/8/27 14:15.
 * @file: user
 */

import http from '../utils/http';

export const getToken = () =>
  http({
    method: 'get',
    url: `/api/user/token`
  });


  export const getUserList = () => 
    http({
      method: 'get',
      url:`/api/user/list`
})