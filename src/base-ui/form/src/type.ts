type iFormType = 'input' | 'password' | 'select' | 'datepicker'
export interface iFormItem {
  filed: string
  type: iFormType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[] // select
  otherOptions?: any
}

export interface iForm {
  formItems: iFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
