<template>
  <div class="menu">
    <h2>menu</h2>
    <page-table page-name="menu" :table-config="tableConfig"></page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageTable from '@/components/page-table/page-table.vue'
import { tableConfig } from '@/views/main/system/menu/config/table-config'

export default defineComponent({
  name: 'SystemMenu',
  components: { PageTable },
  setup() {
    return {
      tableConfig
    }
  }
})
</script>

<style scoped></style>
