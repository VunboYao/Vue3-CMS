import VunRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const instance = new VunRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptor: {
    requestInterceptor: (config) => {
      console.log('instance request')
      return config
    },
    responseInterceptor: (config) => {
      console.log('instance response')
      return config
    }
  }
})

// 提供服务的统一出口
export default instance
