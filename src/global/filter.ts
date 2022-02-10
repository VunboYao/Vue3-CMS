import { App } from 'vue'
import { formatUtcString } from '@/utils/formatTime'
export default function formatTime(app: App): void {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
