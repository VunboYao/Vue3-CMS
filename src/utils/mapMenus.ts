import { RouteRecordRaw } from 'vue-router'

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
  console.log(allRoutes)
  // 2.根据菜单获取需要添加的routes
  return routes
}
