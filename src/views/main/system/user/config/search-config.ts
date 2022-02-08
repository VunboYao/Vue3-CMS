import { iForm } from '@/base-ui/form'

export const formConfig: iForm = {
  formItems: [
    {
      type: 'input',
      label: 'username',
      placeholder: 'please input your name'
    },
    {
      type: 'password',
      label: 'pwd',
      placeholder: 'please input your pwd'
    },
    {
      type: 'datepicker',
      label: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    },
    {
      type: 'select',
      label: 'select',
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
