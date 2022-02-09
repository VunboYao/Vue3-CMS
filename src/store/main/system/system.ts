import { Module } from 'vuex'
import { iSystemState, iVxSystemReq } from '@/store/main/system/type'
import { iRootState } from '@/store/type'
import { reqGetPageListData } from '@/service/main/system/system'
const systemStore: Module<iSystemState, iRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    CHANGE_USER_LIST(state, userList: any[]) {
      state.userList = userList
    },
    CHANGE_USER_COUNT(state, userCount) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: iVxSystemReq) {
      const pageResult = await reqGetPageListData(payload.url, payload.query)
      const { list, totalCount } = pageResult.data

      commit('CHANGE_USER_LIST', list)
      commit('CHANGE_USER_COUNT', totalCount)
    }
  }
}

export default systemStore
