<template>
  <v-table :list-data="dataList" v-bind="tableConfig">
    <template #headerHandler>
      <el-button type="primary">新建用户</el-button>
    </template>
    <template #enable="{ row }">{{ row.enable ? '启用' : '禁用' }}</template>
    <template #createAt="{ row }">
      {{ $filters.formatTime(row.createAt) }}
    </template>
    <template #updateAt="{ row }">
      {{ $filters.formatTime(row.updateAt) }}
    </template>
    <template #operation>
      <el-button type="text" :icon="$icons[useIcon('Edit')]">编辑</el-button>
      <el-button type="text" :icon="$icons[useIcon('Delete')]">删除</el-button>
    </template>
  </v-table>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import vTable from '@/base-ui/table'
import { useIcon } from '@/utils/icon'
import { useStore } from '@/store'
export default defineComponent({
  name: 'PageTable',
  components: {
    vTable
  },
  props: {
    tableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    // 发送网络请求
    const tableSearch = (params: any = {}) => {
      store.dispatch('systemStore/getPageListAction', {
        pageName: props.pageName,
        query: {
          offset: 0,
          size: 10,
          ...params
        }
      })
    }
    tableSearch()
    const dataList = computed(() => {
      return store.getters[`systemStore/pageListData`](props.pageName)
    })
    return {
      useIcon,
      dataList,
      tableSearch
    }
  }
})
</script>

<style scoped></style>
