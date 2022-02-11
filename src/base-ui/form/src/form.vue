<template>
  <div class="v-form">
    <slot name="header"></slot>
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
                  :model-value="modelValue[`${item.filed}`]"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  @update:modelValue="changeModelValue($event, item.filed)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :model-value="modelValue[`${item.filed}`]"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  @update:modelValue="changeModelValue($event, item.filed)"
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
                  :model-value="modelValue[`${item.filed}`]"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  @update:modelValue="changeModelValue($event, item.filed)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { iFormItem } from '@/base-ui/form'

export default defineComponent({
  name: 'Form',
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
      default: '100px'
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
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    /*const formData = reactive({ ...props.modelValue })
    // 如果监听formData，会导致循环更新
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )*/
    const changeModelValue = (value: any, field: string) => {
      // 整体对象更新，当前变更覆盖之前变化
      emit('update:modelValue', {
        ...props.modelValue,
        [field]: value
      })
    }
    return {
      changeModelValue
      // formData
    }
  }
})
</script>

<style scoped>
.v-form {
  padding: 20px;
  overflow: hidden;
  background-color: #fff;
}
</style>
