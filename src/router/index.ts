import { useJwtTokenStore } from '@/stores/store'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import("@/views/index/Index.vue"),
      children: [
        {
          path: '/4041',
          name: "4041",
          component: () => import('@/views/error/404.vue'),
        },
        {
          path: '/system/sysuser',
          name: "sysuser",
          component: () => import('@/views/system/sysuser/SysUser.vue')
        }
      ]
    },
    {
      path: '/404',
      name: "404",
      component: () => import('@/views/error/404.vue'),
    },
    {
      path: '/login',
      name: "login",
      component: () => import('@/views/login/Login.vue'),
    }
  ]
})

router.beforeEach(async (to, from) => {
  const jwtToken = useJwtTokenStore();
  if (
    // 检查用户是否已登录
    !jwtToken.authenticate &&
    // ❗️ 避免无限重定向
    to.name !== 'login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'login' }
  }
})

export default router
