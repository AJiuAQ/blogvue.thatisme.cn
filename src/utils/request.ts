import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios"
import { useUserStoreHook } from '@/store/modules/user'

const request = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json, charset=utf-8' },
})

request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
      config.headers.Authorization = accessToken
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  },
)
// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, msg } = response.data
    // 登录成功
    if (code === '000000') {
      return response.data
    }
    ElMessage.error(msg || '系统出错')
    return Promise.reject(new Error(msg || 'Error'))
  },
  (error: any) => {
    if (error.response.data) {
      const { code, msg } = error.response.data
      // token 过期，跳转登录页
      if (code === 'A0230') {
        ElMessageBox.confirm('当前页面已失效，请重新登录', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        }).then(() => {
          const userStore = useUserStoreHook()
          userStore.resetToken().then(() => {
            location.reload()
          })
        })
      } else {
        ElMessage.error(msg || '系统出错')
      }
      return Promise.reject(error.message);
    }
  }
)

export default request