export const tableConfig = {
  title: '商品列表',
  showIndex: true,
  showSelection: true,
  propsList: [
    { slotName: 'name', prop: 'name', label: '商品名称', minWidth: '100' },
    { slotName: 'oldPrice', prop: 'oldPrice', label: '原价格', minWidth: '90' },
    { slotName: 'newPrice', prop: 'newPrice', label: '现价格', minWidth: '90' },
    { slotName: 'imgUrl', prop: 'imgUrl', label: '商品图片' },
    { slotName: 'status', prop: 'status', label: '状态', minWidth: '100' },
    {
      slotName: 'createAt',
      prop: 'createAt',
      label: '创建时间',
      minWidth: '150'
    },
    {
      slotName: 'updateAt',
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '150'
    },
    { slotName: 'operation', prop: 'operation', label: '操作', minWidth: '120' }
  ],
  onSelect: (item: []): void => {
    console.log(item, '选择了数据')
  }
}
