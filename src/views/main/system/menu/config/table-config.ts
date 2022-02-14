export const tableConfig = {
  title: '菜单列表',
  showIndex: false,
  showSelection: false,
  rowKey: 'id',
  treeProps: {
    children: 'children'
  },
  propsList: [
    { slotName: 'name', prop: 'name', label: '系统纵览', minWidth: '100' },
    {
      slotName: 'type',
      prop: 'type',
      label: '类型',
      minWidth: '50'
    },
    {
      slotName: 'url',
      prop: 'url',
      label: '100',
      minWidth: '100'
    },
    {
      prop: 'permission',
      slotName: 'permission',
      label: '按钮权限',
      minWidth: '100'
    },
    { slotName: 'icon', prop: 'icon', label: '菜单icon' },
    { slotName: 'createAt', prop: 'createAt', label: '创建时间' },
    { slotName: 'updateAt', prop: 'updateAt', label: '更新时间' },
    { slotName: 'operation', prop: 'operation', label: '操作', minWidth: '150' }
  ],
  onSelect: (item: []): void => {
    console.log(item, '选择了数据')
  }
}
