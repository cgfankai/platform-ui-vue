import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
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
    }
  ]
})

export default router
