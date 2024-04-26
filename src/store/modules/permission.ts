import { listRoutes } from '@/api/menu'
import { defineStore } from 'pinia'
import { store } from '@/store';
import { RouteRecordRaw } from 'vue-router'
import { constantRoutes } from '@/router'

const modules = import.meta.glob('../../views/**/**.vue')
const Layout = () => import('@/layout/index.vue');

const hasPermission = (roles: string[], route: RouteRecordRaw) => {
  if (route.meta && route.meta.roles) {
    // 角色【超级管理员】拥有所有权限，忽略校验
    if (roles.includes('ROOT')) {
      return true;
    }
    return roles.some((role) => {
      if (route.meta?.roles) {
        return route.meta.roles.includes(role);
      }
    });
  }
  return false;
};


// 递归过滤有权限的异步(动态)路由
const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
  const asyncRoutes: RouteRecordRaw[] = []
  routes.forEach(route => {
    const tempRoute = { ...route }
    if (!route.name) {
      tempRoute.name = route.path
    }
    // 判断用户(角色)是否有该路由的访问权限
    if (hasPermission(roles, tempRoute)) {
      if (tempRoute.component?.toString() == 'Layout') {
        tempRoute.component = Layout;
      } else {
        const component = modules[`../../views/${tempRoute.component}.vue`];
        if (component) {
          tempRoute.component = component;
        } else {
          tempRoute.component = modules[`../../views/error-page/404.vue`];
        }
      }
      if (tempRoute.children) {
        tempRoute.children = filterAsyncRoutes(tempRoute.children, roles);
      }

      asyncRoutes.push(tempRoute);
    }
  })
  return asyncRoutes
}

export const usePermissionStore = defineStore('permission', () => {
    const routes = ref<RouteRecordRaw[]>([])

    // actions
    function setRoutes(newRoutes: RouteRecordRaw[]) {
      routes.value = constantRoutes.concat(newRoutes)
    }

    /**
     * 生成动态路由
     *
     * @param roles 用户角色集合
     * @returns
     */
    function generateRoutes(roles: string[]) {
      return new Promise<RouteRecordRaw[]>((resolve, reject) => {
        // 接口获取所有路由
        listRoutes()
          .then(({ data: asyncRoutes }) => {
            // 根据角色获取有访问权限的路由
            const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
            setRoutes(accessedRoutes);
            resolve(accessedRoutes);
          })
          .catch((error) => {
            reject(error);
          });
      })
    }

    const mixLeftMenus = ref<RouteRecordRaw[]>([])

    function setMixLeftMenus(topMenuPath: string) {
      const matchedItem = routes.value.find((item) => item.path === topMenuPath)
      if (matchedItem && matchedItem.children) {
        mixLeftMenus.value = matchedItem.children
      }
    }

    return {
      routes,
      setRoutes,
      generateRoutes,
      mixLeftMenus,
      setMixLeftMenus,
    }
  },
)

// 非setup
export function usePermissionStoreHook() {
  return usePermissionStore(store);
}