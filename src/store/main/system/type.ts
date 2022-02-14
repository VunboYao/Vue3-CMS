import { iSystemReqData } from '@/service/main/system/type'

export interface iSystemState {
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
  goodsList: any[]
  goodsCount: number
}

export interface iVxSystemReq {
  pageName: string
  query: iSystemReqData
}
