import request from "@/utils/request.ts"
import { AxiosPromise} from "axios"
import { CaptchaResult, LoginData, LoginResult } from './type.ts'

/**
 * 登录API
 *
 * @param data {LoginData}
 * @returns
 */
export function loginApi(data: LoginData): AxiosPromise<LoginResult> {
  return request({
    url: '/api/v1/auth/login',
    method: 'post',
    params: data
  });
}

/**
 * 获取验证码
 */
export function getCaptchaApi(): AxiosPromise<CaptchaResult> {
  return request({
    url: "/api/v1/auth/captcha",
    method: "get",
  });
}
