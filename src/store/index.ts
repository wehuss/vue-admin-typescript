import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import app from './modules/app'

export const store = createStore<Vuex.Store>(
  {
    modules: {
      app
    }
  }
)

export const key: InjectionKey<Store<Vuex.Store>> = Symbol()
