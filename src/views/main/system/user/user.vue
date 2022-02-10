<template>
  <div class="user">
    <page-search :form-config="formConfig" />
    <div class="content">
      <v-table
        :list-data="userList"
        :props-list="propsList"
        :show-selection="true"
        :show-index="true"
        @select="onSelect"
      >
        <template #enable="{ row }">{{
          row.enable ? '启用' : '禁用'
        }}</template>
        <template #createAt="{ row }">
          {{ $filters.formatTime(row.createAt) }}
        </template>
        <template #updateAt="{ row }">
          {{ $filters.formatTime(row.updateAt) }}
        </template>
        <template #operation>
          <el-button type="text" :icon="$icons[useIcon('Edit')]"
            >编辑</el-button
          >
          <el-button type="text" :icon="$icons[useIcon('Delete')]"
            >删除</el-button
          >
        </template>
      </v-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { formConfig } from '@/views/main/system/user/config/search-config'
import pageSearch from '@/components/page-search/page-search.vue'
import { useStore } from '@/store'
import vTable from '@/base-ui/table'
import { useIcon } from '@/utils/icon'

export default defineComponent({
  name: 'User',
  components: {
    pageSearch,
    vTable
  },
  setup() {
    const store = useStore()
    store.dispatch('systemStore/getPageListAction', {
      url: '/users/list',
      query: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.systemStore.userList)
    const propsList = [
      { prop: 'name', label: '用户名', minWidth: '100px' },
      { prop: 'realname', label: '真实姓名', minWidth: '120px' },
      { prop: 'cellphone', label: '手机号', minWidth: '100px' },
      { prop: 'enable', label: '状态' },
      { prop: 'createAt', label: '创建时间' },
      { prop: 'updateAt', label: '更新时间' },
      { prop: 'operation', label: '操作', minWidth: '150px' }
    ]
    const onSelect = (item: any): void => {
      console.log(item, '选择了数据')
    }
    return {
      useIcon,
      formConfig,
      propsList,
      userList,
      onSelect
    }
  }
})
</script>

<style scoped>
.user {
  padding: 18px 18px 0 0;
}
.content {
  padding: 20px;
}
</style>
