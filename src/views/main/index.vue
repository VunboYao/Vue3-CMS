<template>
  <div>
    <h2>Main</h2>
    <el-button @click="test">Hello</el-button>
    <el-button type="primary">Hello</el-button>
  </div>
</template>

<script setup lang="ts">
import api from '@/service'

interface DataType {
  data: any
  returnCode: number
  success: boolean
}

let test = () => {
  api
    .get<DataType>({
      url: '/home/multidata'
      /*   interceptor: {
      requestInterceptor: (res) => {
        console.log('single request=>>>1')
        return res
      },
      responseInterceptor: (res) => {
        console.log('single response=>>>1')
        return res
      }
    } */
    })
    .then((res) => {
      console.log(res.returnCode, res.success)
    })

  // todo: 并发请求问题处理。计数处理。继发问题，延迟关闭
  /*setTimeout(() => {
    api.request({
      url: '/home/multidata',
      method: 'get'
    })
  }, 2000)*/
}
</script>

<style lang="scss" scoped></style>
