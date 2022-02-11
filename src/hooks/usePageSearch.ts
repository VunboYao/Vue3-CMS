import { ref } from 'vue'
import pageTable from '@/components/page-table/page-table.vue'
import { iForm } from '@/base-ui/form'

interface iUsePageSearch {
  pageTableRef: any
  handleRefresh(): void
  handleSearch: (param: iForm) => void
}
export function usePageSearch(): iUsePageSearch {
  const pageTableRef = ref<InstanceType<typeof pageTable>>()
  const handleSearch = (param: iForm) => {
    pageTableRef.value?.tableSearch(param)
  }
  const handleRefresh = () => {
    pageTableRef.value?.tableSearch()
  }
  return { pageTableRef, handleRefresh, handleSearch } // 导出尽量用对象模式。接口方便interface定义。提示更友好
}
