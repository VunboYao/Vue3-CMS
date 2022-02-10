import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import { GlobalProperty } from '@/global'
import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App)
GlobalProperty(app)
app.use(store)
setupStore() // 刷新后vuex数据恢复

app.use(router) // install(){} => 获取当前path => router.routes => notFound => 路由守卫(回调函数）
app.mount('#app')

// 环境变量
/*console.error('VUE_APP_BASE_URL :>> ', process.env.VUE_APP_BASE_URL)
console.error('VUE_APP_BASE_URL :>> ', process.env.VUE_APP_BASE_NAME)*/
