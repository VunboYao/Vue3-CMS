<template>
  <div class="role">
    <h2>
      <el-button @click="$router.push({ name: 'user' })">Go</el-button>
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Role',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
