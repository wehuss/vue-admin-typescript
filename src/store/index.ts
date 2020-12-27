import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import app from './modules/app'
import getters from './getters'

export const store = createStore<Vuex.Vuex>(
  {
    modules: {
      app
    },
    getters
  }
)

export const key: InjectionKey<Store<Vuex.Vuex>> = Symbol()
