import { Store, useStore } from 'vuex'
import { useRouter, useRoute, Router, RouteLocationNormalizedLoaded } from 'vue-router'
import { key } from '@/store'

// 对useStore二次封装，避免每次使用useStore时都要传入key
export const useGetStore = (function() {
  let store: Store<Vuex.Vuex> | null = null
  return function() {
    if (!store) {
      store = useStore(key)
    }
    return store
  }
})()

// 一次性获取route和router
export const useGetAllRouter = (function() {
  let route: null | RouteLocationNormalizedLoaded = null
  let router: null | Router = null
  return function() {
    if (!route) {
      route = useRoute()
    }
    if (!router) {
      router = useRouter()
    }
    return {
      route,
      router
    }
  }
})()
