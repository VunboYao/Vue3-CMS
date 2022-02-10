<template>
  <div class="user">
    <page-search :form-config="formConfig" />
    <div class="content">
      <v-table :list-data="userList" :props-list="propsList">
        <template #enable="{ row }">{{
          row.enable ? '启用' : '禁用'
        }}</template>
        <template #createAt="{ row }">
          {{ $filters.formatTime(row.createAt) }}
        </template>
        <template #updateAt="{ row }">
          {{ $filters.formatTime(row.updateAt) }}
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

export default defineComponent({
  name: 'user',
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
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '120' },
      { prop: 'cellphone', label: '手机号', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100' },
      { prop: 'createAt', label: '创建时间', minWidth: '100' },
      { prop: 'updateAt', label: '更新时间', minWidth: '100' }
    ]
    return {
      formConfig,
      propsList,
      userList
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
