import { iSystemReqData } from '@/service/main/system/type'

export interface iSystemState {
  userList: any[]
  userCount: number
}

export interface iVxSystemReq {
  url: string
  query: iSystemReqData
}
