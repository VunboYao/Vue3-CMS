import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { VunRequestInterceptors, VunRequestConfig } from './type'

export default class {
  instance: AxiosInstance
  interceptor?: VunRequestInterceptors
  constructor(config: VunRequestConfig) {
    // 根据配置创建一个私有实例
    this.instance = axios.create(config)

    // 实例化时，配置拦截器
    this.interceptor = config.interceptor
    this.instance.interceptors.request.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptor?.responseInterceptor,
      this.interceptor?.responseInterceptorCatch
    )

    // 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('All config===>2', config)
        return config
      },
      (configErr) => {
        console.log('All err===>2', configErr)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        console.log('All res===>2', response)
        return response
      },
      (responseErr) => {
        console.log('All err===>2', responseErr)
      }
    )
  }

  request(config: VunRequestConfig): void {
    // 单次请求的独立加工？？？
    if (config.interceptor?.requestInterceptor) {
      config = config.interceptor.requestInterceptor(config)
    }
    // 实例方法：request
    this.instance.request(config).then((res) => {
      // 针对返回信息首先处理加工？？？
      if (config.interceptor?.responseInterceptor) {
        res = config.interceptor.responseInterceptor(res)
        res
      }
    })
  }
}
