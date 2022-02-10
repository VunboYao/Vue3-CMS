import { iSystemReqData } from '@/service/main/system/type'

export interface iSystemState {
  usersList: any[]
  userCount: number
  roleList: any[]
  roleCount: number
}

export interface iVxSystemReq {
  pageName: string
  query: iSystemReqData
}
