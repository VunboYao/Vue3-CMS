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
  })
}
</script>

<style lang="scss" scoped></style>
