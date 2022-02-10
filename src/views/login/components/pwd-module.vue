<template>
  <div>
    <el-form ref="formRef" :model="account" label-width="60px" :rules="rules">
      <el-form-item label="用户" prop="name">
        <el-input v-model="account.name" clearable />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import rules from './config/rules'
import type { ElForm } from 'element-plus'
import Cache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const account = reactive({
      name: Cache.getCache('name') ?? '',
      password: Cache.getCache('password') ?? ''
    })
    const store = useStore()

    const formRef = ref<InstanceType<typeof ElForm>>() // todo: ref的取值在ref.value
    const pwdActions = (isPwd: boolean) => {
      formRef.value?.validate((isValid) => {
        if (isValid) {
          // 1.判断是否需要记住密码
          if (isPwd) {
            // 3.开始进行登陆验证
            // 如果直接传入account，会是响应式
            store.dispatch('loginStore/vxLogin', { ...account })
            // 2.本地缓存
            Cache.setCache('name', account.name)
            Cache.setCache('password', account.password)
          } else {
            Cache.deleteCache('name')
            Cache.deleteCache('password')
          }
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
