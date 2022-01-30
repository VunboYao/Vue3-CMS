import axios from 'axios'
import { ElLoading } from 'element-plus'
import 'element-plus/theme-chalk/el-loading.css'
import type { AxiosInstance } from 'axios'
import { VunRequestInterceptors, VunRequestConfig } from './type'

let loading: any

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
        // console.log('全局拦截器:', config)
        return config
      },
      () => {
        // console.log('全局拦截器:', configErr)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        // console.log('全局拦截器:', response)
        loading?.close()
        // todo：状态码200，判断returnMessage
        return response.data
      },
      () => {
        setTimeout(() => {
          loading?.close()
        }, 1000)
        // todo: 判断不同的httpErrorCode
        // console.log('全局拦截器:', responseErr)
      }
    )
  }

  request<T>(config: VunRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // todo: 默认开启loading
      config.showLoading = config.showLoading ?? true
      // loading的触发点
      if (config.showLoading) {
        loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      }
      // 单次请求的独立加工？？？
      if (config.interceptor?.requestInterceptor) {
        config = config.interceptor.requestInterceptor(config)
      }
      // 实例方法：request
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 针对返回信息首先处理加工？？？
          if (config.interceptor?.responseInterceptor) {
            res = config.interceptor.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: VunRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'get' })
  }

  post<T>(config: VunRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'post' })
  }

  delete<T>(config: VunRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'delete' })
  }

  put<T>(config: VunRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'put' })
  }
}
