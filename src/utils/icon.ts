import * as icons from '@element-plus/icons-vue'
import { App } from 'vue'

export default function (app: App): void {
  app.config.globalProperties.$icons = {}
  for (const name in icons) {
    app.config.globalProperties.$icons[name] = icons[name as keyof typeof icons]
    app.component(name, icons[name as keyof typeof icons])
  }
}

export function useIcon(icon: string): string {
  return icon.replace(/^el-icon-(.+)$/, (match, target) => {
    const targets = target.split('-').map((t: string) => {
      return t.slice(0, 1).toUpperCase() + t.slice(1)
    })
    return targets.join('')
  })
}
