import { Store, useStore } from 'vuex'
import { key } from '@/store'

export const useGetStore = (function() {
  let store: Store<Vuex.Store> | null = null
  return function() {
    if (!store) {
      store = useStore(key)
    }
    return store
  }
})()
