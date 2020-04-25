import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    {
      path: '/',
      component: '@/pages/index/index',
      routes: [
        { path: '/layout', component: '@/pages/list/index' },
        { path: '/list', component: '@/pages/layouts/index' },
      ],
    },
  ],
});
