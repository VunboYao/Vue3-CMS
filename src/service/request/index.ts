import axios from 'axios'
import { ElLoading } from 'element-plus'
import 'element-plus/theme-chalk/el-loading.css'
import type { AxiosInstance } from 'axios'
import { VunRequestInterceptors, VunRequestConfig } from './type'
import Cache from '@/utils/cache'

let loading: any
let timer: number | null

function closeLoadingTimer() {
  timer = setTimeout(() => {
    loading?.close()
  }, 100)
}

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
      (config: VunRequestConfig) => {
        // console.log('全局拦截器:', config)
        const token = Cache.getCache('token')
        if (token) {
          config.headers.Authorization = token
        }
        return config
      },
      () => {
        // console.log('全局拦截器:', configErr)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        closeLoadingTimer()
        // todo：状态码200，判断returnMessage
        return response.data
      },
      () => {
        closeLoadingTimer()
        // todo: 判断不同的httpErrorCode
      }
    )
  }

  request<T>(config: VunRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // todo: 默认开启loading
      config.showLoading = config.showLoading ?? true
      // loading的触发点
      if (config.showLoading) {
        if (timer) {
          // 存在loading定时器则关闭该定时器
          clearTimeout(timer)
          timer = null
        } else {
          loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }
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
