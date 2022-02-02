import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Cache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/main',
    component: () => import('@/views/main/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  // 路由守卫。登陆页面控制
  if (to.path !== '/login') {
    const token = Cache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})
export default router
