import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import icons from '@/utils/icon' // 全局图标注册

import 'normalize.css'
import './assets/css/index.less'

createApp(App).use(icons).use(store).use(router).mount('#app')
setupStore() // 刷新后vuex数据恢复
// 环境变量
/*console.error('VUE_APP_BASE_URL :>> ', process.env.VUE_APP_BASE_URL)
console.error('VUE_APP_BASE_URL :>> ', process.env.VUE_APP_BASE_NAME)*/
