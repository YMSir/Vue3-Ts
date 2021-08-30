/**
 * Created by Yes.Man on 2021/8/26 18:03.
 * @file: mock
 */

import { mock, Random } from 'mockjs';

const genUserList = (): User => {
  const birth = Random.date('yyyy-MM-dd');
  const year = new Date().getFullYear();
  const age = year - Number(birth.split('-')[0]);

  return {
    addr: Random.county(true),
    age,
    birth,
    email: Random.email(),
    guid: Random.guid(),
    id: Random.id(),
    married: Random.boolean(),
    name: Random.cname(),
    title: Random.ctitle()
  };
};

export default [
  {
    url: `/api/user/token`,
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: Random.guid()
      };
    }
  },
  {
    url: `/api/user/list`,
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: mock({ 'list|1-110': [ genUserList ] }).list
      };
    }
  }
];
