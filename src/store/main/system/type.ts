import { iSystemReqData } from '@/service/main/system/type'

export interface iSystemState {
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
}

export interface iVxSystemReq {
  pageName: string
  query: iSystemReqData
}
