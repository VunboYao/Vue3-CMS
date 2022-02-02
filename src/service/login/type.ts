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

// 用户详细信息，接口定义
export interface Role {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}

export interface Department {
  id: number
  name: string
  parentId?: any
  createAt: Date
  updateAt: Date
  leader: string
}

export interface iLoginResUserData {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt?: Date
  updateAt?: Date
  role: Role
  department: Department
}
