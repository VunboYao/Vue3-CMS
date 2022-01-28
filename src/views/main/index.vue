<template>
  <div>
    <h2>Main</h2>
    <el-button @click="test">Hello</el-button>
    <el-button type="primary">Hello</el-button>
  </div>
</template>

<script setup>
import api from '@/service'

let test = () => {
  api.request({
    url: '/home/multidata',
    method: 'get'
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
}
</script>

<style lang="scss" scoped></style>
