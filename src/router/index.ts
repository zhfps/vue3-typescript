import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Layout',
    component: () => import('../layout/layout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
          icon: 'el-icon-house',
          title: '首页'
        }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
          icon: 'el-icon-setting',
          title: '关于'
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export function getRoutes(): Array<RouteRecordRaw> {
  return routes
}

export default router;
