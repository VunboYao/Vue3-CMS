<template>
  <div>
    <el-icon size="28px">
      <Expand :class="{ reverse: isExpand }" @click="toggleNav" />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useIcon } from '@/utils/icon'

export default defineComponent({
  name: 'NavHeader',
  setup(props, { emit }) {
    const computedIcon = useIcon
    return {
      ...expand(emit),
      computedIcon
    }
  }
})

function expand(emit: any) {
  const isExpand = ref(true)
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
</style>
