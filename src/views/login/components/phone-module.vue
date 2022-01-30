<template>
  <div>
    <el-form label-width="60px">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phone.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input type="password" v-model="phone.code" />
          <el-button type="primary" class="btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      phone: '',
      code: ''
    })
    return {
      phone
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
}
.btn {
  margin-left: 8px;
}
</style>
