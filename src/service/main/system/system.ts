import requestInstance from '@/service'
import { iRes } from '@/service/type'
import { iSystemReqData } from '@/service/main/system/type'

export function reqGetPageListData(
  url: string,
  data: iSystemReqData
): Promise<iRes> {
  return requestInstance.post<iRes>({
    url,
    data
  })
}
