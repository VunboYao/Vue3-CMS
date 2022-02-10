<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="header-handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table v-bind="$attrs" :data="listData" border>
      <el-table-column v-if="showSelection" align="center" type="selection" />
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
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Table',
  props: {
    title: {
      type: String,
      default: ''
    },
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
    },
    showSelection: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.table {
  margin-top: 20px;
  padding: 20px;
  overflow: hidden;
  background-color: #fff;
}
.header {
  height: 40px;
  align-items: center;
  justify-content: space-between;
  display: flex;
}
.title {
  font-size: 18px;
  font-weight: 600;
}
.footer {
  margin-top: 20px;
}
</style>
