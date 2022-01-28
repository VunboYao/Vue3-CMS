import VunRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

/*const instance = new VunRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptor: {
    requestInterceptor: (config) => {
      console.log('实例化时 request')
      return config
    },
    responseInterceptor: (config) => {
      console.log('实例化时 response')
      return config
    }
  }
})*/
const instance = new VunRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
// 提供服务的统一出口
export default instance
