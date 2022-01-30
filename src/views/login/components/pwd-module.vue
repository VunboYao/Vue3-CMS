<template>
  <div>
    <el-form ref="formRef" :model="account" label-width="60px" :rules="rules">
      <el-form-item label="用户" prop="name">
        <el-input v-model="account.name" clearable />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password" clearable />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import rules from './config/rules'
import type { ElForm } from 'element-plus'

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>() // todo: ref的取值在ref.value
    const pwdActions = () => {
      formRef.value?.validate((isValid) => {
        if (isValid) {
          console.log('success')
        } else {
          console.log('data is not exact')
        }
      })
    }
    return {
      formRef,
      rules,
      account,
      pwdActions
    }
  }
})
</script>

<style scoped lang="less"></style>
