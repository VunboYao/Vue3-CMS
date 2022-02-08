<template>
  <div class="user">
    <v-from v-bind="formConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import vFrom from '@/base-ui/form'
import { formConfig } from '@/views/main/system/user/config/search-config'
export default defineComponent({
  name: 'user',
  components: {
    vFrom
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
