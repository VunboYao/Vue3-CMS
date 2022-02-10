export function useIcon(icon: string): string {
  return icon.replace(/^el-icon-(.+)$/, (match, target) => {
    const targets = target.split('-').map((t: string) => {
      return t.slice(0, 1).toUpperCase() + t.slice(1)
    })
    return targets.join('')
  })
}
