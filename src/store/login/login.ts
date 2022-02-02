import { Module } from 'vuex'
import { iLoginState } from '@/store/login/type'
import { iLoginReq } from '@/service/login/type'
import { reqLogin } from '@/service/login/login'

const loginStore: Module<iLoginState, any> = {
  namespaced: true, // 模块下需要声明namespaced
  state() {
    return {
      token: '',
      userInfo: null
    }
  },
  mutations: {
    SAVE_TOKEN(state, token: string) {
      state.token = token
    }
  },
  actions: {
    async vxLogin({ commit }, payload: iLoginReq) {
      const result = await reqLogin(payload)
      const { id, token } = result.data
      commit('SAVE_TOKEN', token)
    }
  }
}

export default loginStore
