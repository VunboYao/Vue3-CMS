<template>
  <div class="goods">
    <h2>goods</h2>
    <page-table :table-config="tableConfig" page-name="goods">
      <template #status="{ row }">{{
        row.status === 1 ? '上架' : '下架'
      }}</template>
      <template #imgUrl="{ row }">
        <el-image
          style="width: 60px; height: 60px"
          :src="row.imgUrl"
          :preview-src-list="[row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="{ row }">{{ '💰' + row.oldPrice }}</template>
    </page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { tableConfig } from '@/views/main/product/goods/config/table-config'
import PageTable from '@/components/page-table/page-table.vue'
export default defineComponent({
  name: 'Goods',
  components: {
    PageTable
  },
  setup() {
    return { tableConfig }
  }
})
</script>

<style scoped></style>
