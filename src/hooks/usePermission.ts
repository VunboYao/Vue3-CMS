import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string): boolean {
  const store = useStore()
  const permission = store.state.loginStore.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  return !!permission.find((item) => item === verifyPermission)
}
