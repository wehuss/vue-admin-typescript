import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
    component: () => import('../layout/index.vue')
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      title: '首页',
      icon: 's-promotion'
    },
    component: () => import('../layout/index.vue')
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      title: 'test',
      icon: 's-custom'
    },
    component: () => import('../layout/index.vue')
  }
  // {
  // 	path: '/about',
  // 	name: 'About',
  // 	// route level code-splitting
  // 	// this generates a separate chunk (about.[hash].js) for this route
  // 	// which is lazy-loaded when the route is visited.
  // 	component: () =>
  // 		import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
