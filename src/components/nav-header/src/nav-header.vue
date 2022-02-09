<template>
  <div class="nav-header">
    <el-icon size="28px">
      <Expand :class="{ reverse: !isExpand }" @click="toggleNav" />
    </el-icon>
    <div class="x">
      <div class="x-left"><breadcrumb :bread-crumb="breadCrumbs" /></div>
      <div class="x-right">
        <user-info />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import userInfo from '@/components/nav-header/src/user-info.vue'
import breadcrumb from '@/base-ui/breadcrumb'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { getBreadCrumbOfPath } from '@/utils/mapMenus'

export default defineComponent({
  name: 'NavHeader',
  components: {
    userInfo,
    breadcrumb
  },
  setup(props, { emit }) {
    const breadCrumbs = handleBreadCrumb()
    return {
      breadCrumbs,
      ...expand(emit)
    }
  }
})
function handleBreadCrumb() {
  const route = useRoute()
  const store = useStore()
  const userMenu = store.state.loginStore.userMenu
  return computed(() => {
    return getBreadCrumbOfPath(userMenu, route.path)
  })
}

function expand(emit: any) {
  const isExpand = ref(false)
  const toggleNav = () => {
    isExpand.value = !isExpand.value
    emit('toggleExpand', isExpand.value)
  }
  return {
    isExpand,
    toggleNav
  }
}
</script>

<style scoped>
.el-icon {
  cursor: pointer;
}

.reverse {
  transform: rotateY(180deg);
}
.nav-header {
  display: flex;
  flex: 1;
}
.x {
  padding-left: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
