import { RouteRecordRaw } from 'vue-router'
import { iBreadcrumb } from '@/base-ui/breadcrumb'
let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 1.先加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  /*  console.dir(routeFiles) // 暴露三个属性。keys(), id, resolve()
  console.log(routeFiles.keys()) // 匹配的文件名路径组成的数组
  console.log(routeFiles.id) // 匹配的文件夹的相对于工程的相对路径
  console.log(routeFiles.resolve(routeFiles.keys()[0])) // resolve接收一个路径id.返回传入参数的文件相对于整个工程的相对路径
  console.log(routeFiles(routeFiles.keys()[0])) // 接受一个路径（id)参数，返回该路径指向的模块*/
  routeFiles.keys().forEach((key) => {
    allRoutes.push(routeFiles(key).default)
  })
  // 2.根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((item) => item.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}

export function getBreadCrumbOfPath(
  userMenus: any[],
  path: string
): iBreadcrumb[] {
  const list: iBreadcrumb[] = []
  getMenuOfPath(userMenus, path, list)
  return list
}

export function getMenuOfPath(
  userMenus: any[],
  path: string,
  breadCrumb?: iBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = getMenuOfPath(menu.children ?? [], path)
      if (findMenu) {
        breadCrumb?.push({ name: menu.name, path: '/' })
        breadCrumb?.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === path) {
      return menu
    }
  }
}

export { firstMenu }
