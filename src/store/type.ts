import { iLoginState } from '@/store/login/type'

export interface iRootState {
  name: string
  age: number
}

// 模块集合
export interface iRootWithModule {
  loginStore: iLoginState
  // userStore: iUserState // 扩展
}

// 定义联合类型控制store
export type iStoreType = iRootState & iRootWithModule
