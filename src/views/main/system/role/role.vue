<template>
  <div class="role">
    <page-search :form-config="formConfig" />
    <page-table page-name="role" :table-config="tableConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { tableConfig } from '@/views/main/system/role/config/table-config'
import { formConfig } from '@/views/main/system/role/config/search-config'
import pageTable from '@/components/page-table/page-table.vue'
import pageSearch from '@/components/page-search/page-search.vue'
export default defineComponent({
  name: 'Role',
  components: {
    pageTable,
    pageSearch
  },
  setup() {
    return {
      formConfig,
      tableConfig
    }
  }
})
</script>

<style scoped></style>
