<template>
  <div class="user">
    <page-search :form-config="formConfig" />
    <page-table :table-config="tableConfig" page-name="users" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formConfig } from '@/views/main/system/user/config/search-config'
import { tableConfig } from '@/views/main/system/user/config/table-config'
import pageSearch from '@/components/page-search/page-search.vue'
import pageTable from '@/components/page-table/page-table.vue'

export default defineComponent({
  name: 'User',
  components: {
    pageSearch,
    pageTable
  },
  setup() {
    return {
      formConfig,
      tableConfig
    }
  }
})
</script>

<style scoped>
.content {
  margin-top: 20px;
  padding: 20px;
}
</style>
