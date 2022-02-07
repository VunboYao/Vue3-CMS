<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" class="img" />
      <span class="title">Vue3+TS</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#286DAF"
      class="el-menu-vertical"
      default-active="2"
      text-color="#fff"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!--一级菜单-->
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <!--一级菜单图标-->
            <template #title v-if="item.icon">
              <el-icon>
                <component :is="$icons[computedIcon(item.icon)]"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!--遍历二级路由-->
            <template v-for="subItem in item.children" :key="subItem.id">
              <template v-if="subItem.type === 2">
                <el-menu-item :index="subItem.id + ''">
                  {{ subItem.name }}
                </el-menu-item>
              </template>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

function computedIconMethod(icon: string) {
  return icon.replace(/^el-icon-(.+)$/, (match, target) => {
    const targets = target.split('-').map((t: string) => {
      return t.slice(0, 1).toUpperCase() + t.slice(1)
    })
    return targets.join('')
  })
}

export default defineComponent({
  name: 'NavMenu',
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.loginStore.userMenu)
    const computedIcon = computedIconMethod // icon处理
    return {
      userMenus,
      computedIcon
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #05294d;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
}
</style>
