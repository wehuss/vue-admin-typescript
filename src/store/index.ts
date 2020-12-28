import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import app from './modules/app'
import getters from './getters'
import settings from './modules/settings'

export const store = createStore<Vuex.Vuex>(
  {
    modules: {
      app,
      settings
    },
    getters
  }
)

export const key: InjectionKey<Store<Vuex.Vuex>> = Symbol()
