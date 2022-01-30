<template>
  <div class="login-panel">
    <h1>User Config System</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span class="title-wrap">
            <el-icon :size="14"><user /></el-icon>&nbsp;密码登陆
          </span>
        </template>
        <PwdModule ref="pwdRef" />
      </el-tab-pane>
      <el-tab-pane label="Config">
        <template #label>
          <span class="title-wrap">
            <el-icon :size="14"><phone /></el-icon>&nbsp;短信登陆
          </span>
        </template>
        <PhoneModule />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPwd" label="记住密码" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="loginActions"
      >立即登陆
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { User, Phone } from '@element-plus/icons-vue'
import PwdModule from './pwd-module.vue'
import PhoneModule from './phone-module.vue'

export default defineComponent({
  components: {
    User,
    Phone,
    PwdModule,
    PhoneModule
  },
  setup() {
    const isKeepPwd = ref(true) // ref初始值声明

    const pwdRef = ref<InstanceType<typeof PwdModule>>() // 获取组件实例的类型

    const loginActions = () => {
      pwdRef.value?.pwdActions()
    }
    return {
      pwdRef,
      loginActions,
      isKeepPwd
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-top: -200px;
  width: 320px;

  .title-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

h1 {
  text-align: center;
}

.account-control {
  display: flex;
  justify-content: space-between;
}

.login-btn {
  width: 100%;
}
</style>
