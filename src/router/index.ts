/**
 * Created by Yes.Man on 2021/8/26 15:07.
 * @file: router
 */
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/user',
      component: () => import('@/layout/UserLayout/index.vue'),
      children: [
        {
          path: 'login',
          component: () => import('@/views/user/Login.vue')
        }
      ]
    },
    {
      path: '/(*)',
      redirect: '/user/login'
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  console.log(to, from, next);
  next();
});

export default router;
