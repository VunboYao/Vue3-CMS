export const tableConfig = {
  title: '用户列表',
  showIndex: true,
  showSelection: true,
  propsList: [
    { prop: 'name', label: '用户名', minWidth: '100px' },
    { prop: 'realname', label: '真实姓名', minWidth: '120px' },
    { prop: 'cellphone', label: '手机号', minWidth: '100px' },
    { prop: 'enable', label: '状态' },
    { prop: 'createAt', label: '创建时间' },
    { prop: 'updateAt', label: '更新时间' },
    { prop: 'operation', label: '操作', minWidth: '150px' }
  ],
  onSelect: (item: []): void => {
    console.log(item, '选择了数据')
  }
}
