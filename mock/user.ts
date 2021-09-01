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
    url: `/user/token`,
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
    url: `/user/list`,
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        // data: mock({ 'list|1-110': [ genUserList ] }).list
        data: mock({
          'list|1-110': [
            {
              addr: Random.county(true),
              age: 12,
              birth: 32,
              email: Random.email(),
              guid: Random.guid(),
              id: Random.id(),
              married: Random.boolean(),
              name: '@cname()',
              title: Random.ctitle()
            }
          ]
        }).list
      };
    }
  }
];
