<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in breadCrumb"
        :key="item"
        :to="item.path"
        >{{ item.name }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { iBreadcrumb } from '@/base-ui/breadcrumb/src/type'

export default defineComponent({
  name: 'Breadcrumb',
  props: {
    breadCrumb: {
      type: Array as PropType<iBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
