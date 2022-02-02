import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface VunRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

// 扩展AxiosRequestConfig.增加拦截器处理
export interface VunRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptor?: VunRequestInterceptors<T>
  showLoading?: boolean
  headers?: any
}
