
/**
 * 设置Style属性
 *
 * @param propName
 * @param value
 */
export function setStyleProperty(propName: string, value: string) {
  document.documentElement.style.setProperty(propName, value);
}
