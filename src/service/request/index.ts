import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
class VunAxios {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    // 根据配置创建一个私有实例
    this.instance = axios.create(config)
  }

  request(config: AxiosRequestConfig): void {
    // 实例方法：request
    this.instance.request(config).then((res) => {
      console.log('res', res)
    })
  }
}

export default VunAxios
