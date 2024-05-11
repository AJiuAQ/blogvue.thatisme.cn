
/**
 * 设置Style属性
 *
 * @param propName
 * @param value
 */
export function setStyleProperty(propName: string, value: string) {
  document.documentElement.style.setProperty(propName, value);
}

/**
 * 判断是否是外部链接
 *
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string) {
  return /^(https?:|http?:|mailto:|tel:)/.test(path);
}
