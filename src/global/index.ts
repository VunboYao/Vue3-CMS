import { App } from 'vue'
import formatTime from '@/global/filter'
import icon from './icon'
export function GlobalProperty(app: App): void {
  app.use(icon)
  app.use(formatTime)
}
