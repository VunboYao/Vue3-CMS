import { iForm } from '@/base-ui/form'
export const formData = {
  name: '',
  pwd: '',
  createTime: '',
  hobbit: ''
}
export const formConfig: iForm = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: 'please input your name'
    },
    {
      filed: 'intro',
      type: 'input',
      label: '权限介绍'
    },
    {
      filed: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
  /*labelWidth: '120px',
  itemStyle: { padding: '5px' },
  colLayout: { span: 8 }*/
}
