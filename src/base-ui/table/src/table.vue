<template>
  <div>
    <el-table :data="listData" border>
      <el-table-column
        v-if="showIndex"
        type="index"
        width="60px"
        align="center"
        label="序号"
      />
      <template v-for="item in propsList" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <template #default="{ row }">
            <slot :name="item.prop" :row="row">{{ row[item.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Table',
  props: {
    listData: {
      type: Array,
      required: true
    },
    propsList: {
      type: Array,
      required: true
    },
    showIndex: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
