import { Module } from 'vuex'
import { iLoginState } from '@/store/login/type'
import { iLoginReq } from '@/service/login/type'
import {
  reqLogin,
  reqLoginUserInfo,
  reqLoginUserMenus
} from '@/service/login/login'
import Cache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/mapMenus'

const loginStore: Module<iLoginState, any> = {
  namespaced: true, // 模块下需要声明namespaced
  state() {
    return {
      token: '',
      userInfo: null,
      userMenu: null
    }
  },
  mutations: {
    SAVE_TOKEN(state, token: string) {
      state.token = token
    },
    SAVE_USERINFO(state, userInfo: any) {
      state.userInfo = userInfo
    },
    SAVE_USER_MENU(state, userMenu: any) {
      state.userMenu = userMenu
      const route = mapMenusToRoutes(userMenu)
      route.forEach((route) => {
        router.addRoute('Main', route)
      })
      debugger
    },
    LOGIN_LOCAL_DATA(state) {
      const userInfo = Cache.getCache('userInfo')
      if (userInfo) {
        state.userInfo = userInfo
      }
      const token = Cache.getCache('token')
      if (token) {
        state.token = token
      }
      const userMenu = Cache.getCache('userMenu')
      if (userMenu) {
        state.userMenu = userMenu
        const route = mapMenusToRoutes(userMenu)
        route.forEach((route) => {
          router.addRoute('Main', route)
        })
      }
    }
  },
  actions: {
    async vxLogin({ commit }, payload: iLoginReq) {
      // 1.获取token
      const result = await reqLogin(payload)
      const { id, token } = result.data
      commit('SAVE_TOKEN', token)
      Cache.setCache('token', token)

      // 2.查询用户信息
      const userInfoResult = await reqLoginUserInfo(id)
      const userInfo = userInfoResult.data
      commit('SAVE_USERINFO', userInfo)
      Cache.setCache('userInfo', userInfo)

      // 3.查询用户菜单
      const userMenusResult = await reqLoginUserMenus(userInfo.role.id)
      const userMenu = userMenusResult.data
      commit('SAVE_USER_MENU', userMenu)
      Cache.setCache('userMenu', userMenu)

      // 4.路由跳转
      await router.push('/main')
    }
  }
}

export default loginStore
