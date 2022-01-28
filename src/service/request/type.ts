import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface VunRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}
// 扩展AxiosRequestConfig.增加拦截器处理
export interface VunRequestConfig extends AxiosRequestConfig {
  interceptor?: VunRequestInterceptors
}
