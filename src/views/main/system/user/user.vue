<template>
  <div class="user">
    <page-search :form-config="formConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formConfig } from '@/views/main/system/user/config/search-config'
import pageSearch from '@/components/page-search/page-search.vue'
export default defineComponent({
  name: 'user',
  components: {
    pageSearch
  },
  setup() {
    return {
      formConfig
    }
  }
})
</script>

<style scoped>
.user {
  padding: 18px 18px 0 0;
}
</style>
