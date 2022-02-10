import { iForm } from '@/base-ui/form'
export const formConfig: iForm = {
  formItems: [
    {
      filed: 'name',
      type: 'input',
      label: '用户名',
      placeholder: 'please input your name'
    },
    {
      filed: 'id',
      type: 'input',
      label: 'id',
      placeholder: 'please input your id'
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
    },
    {
      filed: 'hobbit',
      type: 'select',
      label: '爱好',
      placeholder: 'please some ...',
      options: [
        {
          label: '足球',
          value: 'soccer'
        },
        {
          label: '篮球',
          value: 'basketball'
        }
      ]
    }
  ]
  /*labelWidth: '120px',
  itemStyle: { padding: '5px' },
  colLayout: { span: 8 }*/
}
