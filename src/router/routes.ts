/**
 * Created by Yes.Man on 2021/8/31 9:56.
 * @file: routes
 */
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    redirect: to => ('/')
  }
];

export default routes;
