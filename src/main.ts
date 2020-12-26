import { createApp } from 'vue'
import { Store } from 'vuex'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import { store, key } from './store'

import 'element-plus/lib/theme-chalk/index.css'

createApp(App)
  .use(router)
  .use(store, key)
  .use(ElementPlus)
  .mount('#app')

// import { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<Vuex.Store>
  }
}
