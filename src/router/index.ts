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
  },
  {
    // Uncaught Error: Route paths should start with a "/"
    // 路径必须以/"开头，暂未找到解决方法,所以外部链接暂时以"/"开头再手动裁切
    path: '/https://element-plus.gitee.io/#/zh-CN/component/menu',
    name: 'element-plus',
    meta: {
      title: 'element-plus',
      icon: 'share'
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
