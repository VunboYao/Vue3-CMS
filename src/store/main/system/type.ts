import { iSystemReqData } from '@/service/main/system/type'

export interface iSystemState {
  userList: any[]
  userCount: number
  roleList: any[]
  roleCount: number
}

export interface iVxSystemReq {
  pageName: string
  query: iSystemReqData
}
