import requestInstance from '@/service'
import { iLoginRes, iLoginReq, iLoginResData } from '@/service/login/type'

export function reqLogin(data: iLoginReq) {
  // 返回一个由请求实例触发的post请求
  return requestInstance.post<iLoginRes<iLoginResData>>({
    url: '/login',
    data
  })
}
