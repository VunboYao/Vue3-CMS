import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import './assets/css/index.less'

createApp(App).use(store).use(router).mount('#app')

// 环境变量
/*console.error('VUE_APP_BASE_URL :>> ', process.env.VUE_APP_BASE_URL)
console.error('VUE_APP_BASE_URL :>> ', process.env.VUE_APP_BASE_NAME)*/
