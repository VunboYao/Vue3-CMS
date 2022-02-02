import requestInstance from '@/service'
import {
  iLoginRes,
  iLoginReq,
  iLoginResData,
  iLoginResUserData
} from '@/service/login/type'

enum loginApi {
  loginAccount = '/login',
  loginUserInfo = '/users/',
  loginUserMenus = './role/'
}

// 返回值是Promise类型
export function reqLogin(data: iLoginReq): Promise<iLoginRes> {
  // 返回一个由请求实例触发的post请求
  return requestInstance.post<iLoginRes<iLoginResData>>({
    url: loginApi.loginAccount,
    data
  })
}

export function reqLoginUserInfo(id: number): Promise<iLoginRes> {
  return requestInstance.get<iLoginRes<iLoginResUserData>>({
    url: loginApi.loginUserInfo + id
  })
}

export function reqLoginUserMenus(id: number): Promise<iLoginRes> {
  return requestInstance.get<iLoginRes>({
    url: loginApi.loginUserMenus + id + '/menu'
  })
}
