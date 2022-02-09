import { createStore, Store, useStore as vxUseStore } from 'vuex'
import loginStore from '@/store/login/login'
import systemStore from '@/store/main/system/system'
import { iRootState, iStoreType } from '@/store/type'

const store = createStore<iRootState>({
  state() {
    return {
      name: 'vunbo',
      age: 28
    }
  },
  modules: {
    loginStore,
    systemStore
  }
})

// 缓存数据，初始化vuex刷新问题
export function setupStore(): void {
  store.commit('loginStore/LOGIN_LOCAL_DATA')
}

// 根据泛型iStoreType自定义useStore。
export function useStore(): Store<iStoreType> {
  return vxUseStore() // 返回原useStore
}

export default store
