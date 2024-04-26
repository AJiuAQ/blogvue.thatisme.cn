import request from '@/utils/request.ts'
import { AxiosPromise } from 'axios'
import { UserInfo } from '@/api/user/types.ts'


/**
 * 登录成功后获取用户信息（昵称、头像、权限集合和角色集合）
 */
export function getUserInfoApi(): AxiosPromise<UserInfo> {
  return request({
    url: "/api/v1/users/me",
    method: "get",
  });
}