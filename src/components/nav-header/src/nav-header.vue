<template>
  <div class="nav-header">
    <el-icon size="28px">
      <Expand :class="{ reverse: !isExpand }" @click="toggleNav" />
    </el-icon>
    <div class="x">
      <div class="x-left">面包屑</div>
      <div class="x-right">
        <user-info />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useIcon } from '@/utils/icon'
import userInfo from '@/components/nav-header/src/user-info.vue'
export default defineComponent({
  name: 'NavHeader',
  components: {
    userInfo
  },
  setup(props, { emit }) {
    const computedIcon = useIcon
    return {
      ...expand(emit),
      computedIcon
    }
  }
})

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
