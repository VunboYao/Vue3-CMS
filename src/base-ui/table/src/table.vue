<template>
  <div class="table">
    <!--表格头插槽-->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="header-handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>

    <!--表格列数据展示处理，插槽注册-->
    <el-table v-bind="$attrs" :data="listData" border>
      <!--多选框-->
      <el-table-column v-if="showSelection" align="center" type="selection" />
      <!--排序-->
      <el-table-column
        v-if="showIndex"
        type="index"
        width="60px"
        align="center"
        label="序号"
      />
      <!--插槽内容注入-->
      <template v-for="item in propsList" :key="item.prop">
        <el-table-column show-overflow-tooltip v-bind="item" align="center">
          <template #default="{ row }">
            <!--默认插槽中，根据表格prop注入具名插槽。同时展示默认数据-->
            <slot :name="item.prop" :row="row">{{ row[item.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <!--分页器：总是值大于0时展示-->
    <div v-if="listCount" class="footer">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="onSizeChange"
          @current-change="onCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Table',
  props: {
    page: {
      type: Object,
      default: () => ({
        currentPage: 1,
        pageSize: 10
      })
    },
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
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
  emits: ['update:page'],
  setup(props, { emit }) {
    const currentPage = ref(props.page.currentPage)
    const pageSize = ref(props.page.pageSize)
    const onSizeChange = (count: number) => {
      emit('update:page', {
        currentPage: currentPage.value,
        pageSize: count
      })
    }
    const onCurrentChange = (count: number) => {
      emit('update:page', {
        pageSize: pageSize.value,
        currentPage: count
      })
    }
    return {
      pageSize,
      currentPage,
      onSizeChange,
      onCurrentChange
    }
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
