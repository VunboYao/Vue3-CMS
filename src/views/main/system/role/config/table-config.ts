export const tableConfig = {
  title: '用户列表',
  showIndex: true,
  showSelection: true,
  propsList: [
    { prop: 'name', label: '角色名', minWidth: '100px' },
    { prop: 'intro', label: '权限介绍', minWidth: '120px' },
    { prop: 'createAt', label: '创建时间' },
    { prop: 'updateAt', label: '更新时间' },
    { prop: 'operation', label: '操作', minWidth: '150px' }
  ],
  onSelect: (item: []): void => {
    console.log(item, '选择了数据')
  }
}
