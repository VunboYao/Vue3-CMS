import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Cache from '@/utils/cache'
import { firstMenu } from '@/utils/mapMenus'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/views/main/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/not-found/not-found.vue')
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
  // console.log(to) // 匹配到了notFound
  if (to.path === '/main') {
    return firstMenu.url
  }
})
export default router
