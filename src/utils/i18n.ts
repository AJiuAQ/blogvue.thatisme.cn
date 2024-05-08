import i18n from '@/lang'

export function translateRouteTitle(title: any) {
  // 判断是否存在国际化配置，如果没有原生返回
  const hasKey = i18n.global.te('route.' + title)
  if (hasKey) {
    return i18n.global.t(title)
  }
  return title
}