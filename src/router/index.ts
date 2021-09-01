/**
 * Created by Yes.Man on 2021/8/26 15:07.
 * @file: router
 */
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/user'
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/layout/UserLayout/index.vue'),
      children: [
        {
          path: '',
          redirect: { name: 'Login' }
        },
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/views/user/login.vue')
        },
        {
          path: 'list',
          name: 'List',
          component: () => import('@/views/user/list.vue')
        }
      ]
    },
    {
      path: '/threejs',
      name: 'ThreeJs',
      component: () => import('@/views/threejs/index.vue')
    },
    {
      // vue2 *
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('@/views/404/index.vue')
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  // console.log(to, from, next);
  next();
});

export default router;
