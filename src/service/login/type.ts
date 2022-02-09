export interface iLoginReq {
  name: string
  password: string
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
