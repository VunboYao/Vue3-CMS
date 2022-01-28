import VunRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const instance = new VunRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

// 提供服务的统一出口
export default instance
