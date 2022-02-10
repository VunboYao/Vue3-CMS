<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="mainExpand ? '60px' : '210px'">
        <NavMenu :expand="mainExpand" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <NavHeader @toggleExpand="changeExpand" />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <RouterView />
            <!--            <RouterView v-slot="{ Component }">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </RouterView>-->
            <!--子孙页面展示区域-->
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

export default defineComponent({
  name: 'Main',
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const mainExpand = ref(false)
    const changeExpand = (expand: boolean) => {
      mainExpand.value = expand
    }
    return {
      mainExpand,
      changeExpand
    }
  }
})
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  //line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.page-content {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
  div {
    overflow: hidden;
    border-radius: 4px;
  }
}
</style>
