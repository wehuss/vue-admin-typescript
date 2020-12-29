import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import ElIcons from '@/components/ElIcons/index.vue'
import router from './router'
import { store, key } from './store'

import 'normalize.css/normalize.css' // 重置默认样式
import 'element-plus/lib/theme-chalk/index.css' // element-plus 样式文件
import '@/styles/index.scss' // global css

createApp(App)
  .use(router)
  .use(store, key)
  .use(ElementPlus)
  .component('ElIcons', ElIcons)
  .mount('#app')
