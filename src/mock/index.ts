/**
 * Created by Yes.Man on 2021/8/26 18:03.
 * @file: mock
 */

export default [
  {
    url: `/api/user/token`,
    method: 'get',
    response: (body: object) => {
      console.log('body>>>>>', body);
      return {
        code: 0,
        message: 'ok',
        data: 'this is a token.'
      }
    }
  }
]
