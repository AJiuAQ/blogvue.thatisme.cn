import { loginApi } from '@/api/auth'
import { LoginData } from '@/api/auth/type.ts'
import { store } from '@/store'
import { resetRouter } from '@/router'
import { UserInfo } from '@/api/user/types.ts'
import { getUserInfoApi } from '@/api/user'

export const useUserStore = defineStore('user', () => {
  const user = ref<UserInfo>({
    roles: [],
    perms: [],
  });

  /**
   * 登录调用
   *
   * @param {LoginData}
   * @returns
   */
  function login(loginData: LoginData) {
    return new Promise<void>((resolve, reject) => {
      loginApi(loginData)
        .then(response => {
          const { tokenType, accessToken } = response.data
          localStorage.setItem('accessToken', tokenType + ' ' + accessToken)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  // 获取信息(用户昵称、头像、角色集合、权限集合)
  function getUserInfo() {
    return new Promise<UserInfo>((resolve, reject) => {
      getUserInfoApi()
        .then(({ data }) => {
          if (!data) {
            reject("Verification failed, please Login again.");
            return;
          }
          if (!data.roles || data.roles.length <= 0) {
            reject("getUserInfo: roles must be a non-null array!");
            return;
          }
          Object.assign(user.value, { ...data });
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  function resetToken() {
    console.log('reset token')
    return new Promise<void>(resolve => {
      localStorage.setItem('accessToken', '')
      resetRouter()
      resolve()
    })
  }

  return {
    user,
    login,
    getUserInfo,
    resetToken,
  }
})


export function useUserStoreHook() {
  return useUserStore(store)
}