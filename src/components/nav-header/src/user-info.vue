<template>
  <div>
    <el-dropdown>
      <div class="el-dropdown-link">
        <el-avatar :size="26" :src="circleUrl"></el-avatar>
        <span>{{ name }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="QuitLogin($store)">
            <el-icon><bicycle /></el-icon>
            <span>退出登陆</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <el-icon><tools /></el-icon>
            <span>系统管理</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import { Store } from 'vuex'
import { iStoreType } from '@/store/type'

export default defineComponent({
  name: 'UserInfo',
  setup() {
    const circleUrl = ref(
      'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    )
    const store = useStore()
    const name = store.state.loginStore.userInfo.name
    return {
      circleUrl,
      name,
      QuitLogin
    }
  }
})
function QuitLogin(store: Store<iStoreType>): void {
  store.commit('loginStore/QUIT_LOGIN')
}
</script>

<style scoped>
.el-dropdown {
  cursor: pointer;
}
.el-dropdown-link {
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-avatar {
  margin-right: 10px;
}
</style>
