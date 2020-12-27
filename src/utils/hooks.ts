import { Store, useStore } from 'vuex'
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
