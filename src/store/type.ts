import { iLoginState } from '@/store/login/type'
import { iSystemState } from '@/store/main/system/type'

export interface iRootState {
  name: string
  age: number
}

// 模块集合
export interface iRootWithModule {
  loginStore: iLoginState
  systemStore: iSystemState
}

// 定义联合类型控制store
export type iStoreType = iRootState & iRootWithModule
