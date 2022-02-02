export interface iLoginReq {
  name: string
  password: string
}

// 返回值类型的接口定义：可扩展,泛型实现，data未固定类型
export interface iLoginRes<T = any> {
  code: number
  data: T
}

// 登陆接口的返回值类型
export interface iLoginResData {
  id: number
  name: string
  token: string
}
