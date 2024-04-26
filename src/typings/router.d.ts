import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /** 菜单名称 */
    title?: string;
    /** 菜单图标  */
    icon?: string;
    /** 菜单是否隐藏 */
    hidden?: boolean;
    /** 是否固定页签 */
    affix?: boolean;
    /** 是否缓存页面 */
    keepAlive?: boolean;
    /** 是否在面包屑上隐藏 */
    breadcrumb?: boolean;
    /** 拥有菜单权限的角色编码集合 */
    roles?: string[];
  }
}