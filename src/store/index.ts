import { createStore } from 'vuex'
import loginStore from '@/store/login/login'

const store = createStore({
  modules: {
    loginStore
  }
})

// 缓存数据，初始化vuex刷新问题
export function setupStore() {
  store.commit('loginStore/LOGIN_LOCAL_DATA')
}

export default store
