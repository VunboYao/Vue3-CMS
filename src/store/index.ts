import { createStore } from 'vuex'
import loginStore from '@/store/login/login'

const store = createStore({
  modules: {
    loginStore
  }
})
export default store
