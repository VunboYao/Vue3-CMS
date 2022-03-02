<template>
  <v-table
    v-model:page="pageInfo"
    :list-count="pageCount"
    :list-data="dataList"
    v-bind="tableConfig"
  >
    <template #headerHandler>
      <el-button v-if="isCreate" type="primary">新建用户</el-button>
    </template>
    <template #createAt="{ row }">
      {{ $filters.formatTime(row.createAt) }}
    </template>
    <template #updateAt="{ row }">
      {{ $filters.formatTime(row.updateAt) }}
    </template>
    <template #operation>
      <el-button v-if="isUpdate" type="text" :icon="$icons[useIcon('Edit')]"
        >编辑</el-button
      >
      <el-button v-if="isDelete" type="text" :icon="$icons[useIcon('Delete')]"
        >删除</el-button
      >
    </template>
    <!-- 动态组件注册 -->
    <template
      v-for="item in otherPropSlots"
      :key="item.prop"
      #[item.prop]="{ row }"
    >
      <slot v-if="item.slotName" :name="item.slotName" :row="row"></slot>
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
import { usePermission } from '@/hooks/usePermission'

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
    // 权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')
    // 分页器配置
    const pageInfo = ref({
      pageSize: 10,
      currentPage: 1
    })
    // 发送网络请求
    const tableSearch = (params: any = {}) => {
      if (!isQuery) return
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

    const otherPropSlots = props.tableConfig.propsList.filter((item: any) => {
      if (item.prop === 'createAt') return false
      if (item.prop === 'operation') return false
      return item.prop !== 'updateAt'
    })
    return {
      ...getTableData(store, props), // 页面数据，数量获取
      pageInfo,
      useIcon,
      tableSearch,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete
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
