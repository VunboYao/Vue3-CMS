// 返回值类型的接口定义：可扩展,泛型实现，data未固定类型
export interface iRes<T = any> {
  code: number
  data: T
}
