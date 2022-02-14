export const tableConfig = {
  title: '用户列表',
  showIndex: true,
  showSelection: true,
  propsList: [
    { slotName: 'name', prop: 'name', label: '用户名', minWidth: '100' },
    {
      slotName: 'realname',
      prop: 'realname',
      label: '真实姓名',
      minWidth: '120'
    },
    {
      slotName: 'cellphone',
      prop: 'cellphone',
      label: '手机号',
      minWidth: '100'
    },
    { slotName: 'enable', prop: 'enable', label: '状态' },
    { slotName: 'createAt', prop: 'createAt', label: '创建时间' },
    { slotName: 'updateAt', prop: 'updateAt', label: '更新时间' },
    { slotName: 'operation', prop: 'operation', label: '操作', minWidth: '150' }
  ],
  onSelect: (item: []): void => {
    console.log(item, '选择了数据')
  }
}
