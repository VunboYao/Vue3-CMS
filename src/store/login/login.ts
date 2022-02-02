import { Module } from 'vuex'
import { iLoginState } from '@/store/login/type'

const loginStore: Module<iLoginState, any> = {
  namespaced: true, // 模块下需要声明namespaced
  state() {
    return {
      token: '',
      userInfo: null
    }
  },
  actions: {
    vxLogin({ commit }, payload: any) {
      // commit('')
      console.log(payload)
    }
  }
}

export default loginStore
