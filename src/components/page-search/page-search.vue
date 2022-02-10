<template>
  <div>
    <v-from v-model="formData" v-bind="formConfig">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btn">
          <el-button>重置</el-button>
          <el-button type="primary">查询</el-button>
        </div>
      </template>
    </v-from>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import vFrom from '@/base-ui/form'
import { formData } from '@/views/main/system/user/config/search-config'

export default defineComponent({
  name: 'PageSearch',
  components: {
    vFrom
  },
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      formData // model数据未处理
    }
  }
})
</script>

<style scoped>
.handle-btn {
  padding: 20px;
  text-align: right;
}
</style>
