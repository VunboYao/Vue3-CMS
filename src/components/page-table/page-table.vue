<template>
  <v-table
    v-model:page="pageInfo"
    :list-count="pageCount"
    :list-data="dataList"
    v-bind="tableConfig"
  >
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
import { computed, defineComponent, ref, watch } from 'vue'
import vTable from '@/base-ui/table'
import { useIcon } from '@/utils/icon'
import { useStore } from '@/store'
import { Store } from 'vuex'
import { iStoreType } from '@/store/type'

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
    // 分页器配置
    const pageInfo = ref({
      pageSize: 2,
      currentPage: 1
    })
    // 发送网络请求
    const tableSearch = (params: any = {}) => {
      store.dispatch('systemStore/getPageListAction', {
        pageName: props.pageName,
        query: {
          offset: pageInfo.value.pageSize * (pageInfo.value.currentPage - 1),
          size: pageInfo.value.pageSize,
          ...params
        }
      })
    }
    tableSearch()
    watch(pageInfo, () => {
      tableSearch()
    })

    return {
      ...getTableData(store, props), // 页面数据，数量获取
      pageInfo,
      useIcon,
      tableSearch
    }
  }
})
function getTableData(store: Store<iStoreType>, props: any): any {
  const dataList = computed(() => {
    return store.getters[`systemStore/pageListData`](props.pageName)
  })
  const pageCount = computed(() => {
    return store.getters[`systemStore/pageCount`](props.pageName)
  })
  return {
    dataList,
    pageCount
  }
}
</script>

<style scoped></style>
