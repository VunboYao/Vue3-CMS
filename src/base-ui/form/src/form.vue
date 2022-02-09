<template>
  <div class="v-form">
    <el-form :label-width="labelWith">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.filed}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-model="formData[`${item.filed}`]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-model="formData[`${item.filed}`]"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, watch } from 'vue'
import { iFormItem } from '@/base-ui/form'

export default defineComponent({
  name: 'Form',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Object,
      default: () => null
    },
    formItems: {
      type: Array as PropType<iFormItem[]>,
      default: () => null
    },
    labelWith: {
      type: String,
      default: '120px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '5px 10px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup(props, { emit }) {
    const formData = reactive({
      ...props.modelValue
    })
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )
    return {
      formData
    }
  }
})
</script>

<style scoped></style>
