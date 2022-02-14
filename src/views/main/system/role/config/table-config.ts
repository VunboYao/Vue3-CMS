export const tableConfig = {
  title: '用户列表',
  showIndex: true,
  showSelection: true,
  propsList: [
    { slotName: 'name', prop: 'name', label: '角色名', minWidth: '100' },
    { slotName: 'intro', prop: 'intro', label: '权限介绍', minWidth: '120' },
    { slotName: 'createAt', prop: 'createAt', label: '创建时间' },
    { slotName: 'updateAt', prop: 'updateAt', label: '更新时间' },
    { slotName: 'operation', prop: 'operation', label: '操作', minWidth: '150' }
  ],
  onSelect: (item: []): void => {
    console.log(item, '选择了数据')
  }
}
