
/**
 * 系统设置
 */
interface AppSettings {
  /** 系统标题 */
  title: string;
  /** 系统版本 */
  version: string;
  /** 是否显示设置 */
  showSettings: boolean;
  /** 是否固定头部 */
  fixedHeader: boolean;
  /** 是否显示多标签导航 */
  tagsView: boolean;
  /** 是否显示侧边栏Logo */
  sidebarLogo: boolean;
  /** 导航栏布局(left|top|mix) */
  layout: string;
  /** 主题颜色 */
  themeColor: string;
  /** 主题模式(dark|light) */
  theme: string;
  /** 布局大小(default |large |small) */
  size: string;
  /** 语言( zh-cn| en) */
  language: string;
  /** 是否开启水印 */
  watermarkEnabled: boolean;
  /** 水印内容 */
  watermarkContent: string;
}