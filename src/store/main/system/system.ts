import { Module } from 'vuex'
import { iSystemState, iVxSystemReq } from '@/store/main/system/type'
import { iRootState } from '@/store/type'
import { reqGetPageListData } from '@/service/main/system/system'

const systemStore: Module<iSystemState, iRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    CHANGE_USERS_LIST(state, userList: any[]) {
      state.userList = userList
    },
    CHANGE_USERS_COUNT(state, userCount) {
      state.userCount = userCount
    },
    CHANGE_ROLE_LIST(state, roleList: any[]) {
      state.roleList = roleList
    },
    CHANGE_ROLE_COUNT(state, roleCount) {
      state.roleCount = roleCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: iVxSystemReq) {
      const url = `/${payload.pageName}/list` // 根据传入的pageName动态配置请求路径
      const pageResult = await reqGetPageListData(url, payload.query)
      const { list, totalCount } = pageResult.data

      // 根据请求的pageName动态匹配mutation
      commit(`CHANGE_${payload.pageName.toUpperCase()}_LIST`, list)
      commit(`CHANGE_${payload.pageName.toUpperCase()}_COUNT`, totalCount)
    }
  }
}

export default systemStore
