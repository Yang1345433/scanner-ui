/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { AccountPasswordDTO, RegisterAccountPasswordDTO, ResultString } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Login<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description 将会返回x-access-token
   *
   * @tags 登录/注册
   * @name RegisterWithUsernameAndPassword
   * @summary 注册
   * @request POST:/auth/login/register
   * @secure
   */
  registerWithUsernameAndPassword = (data: RegisterAccountPasswordDTO, params: RequestParams = {}) =>
    this.http.request<ResultString, any>({
      path: `/auth/login/register`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 将会返回x-access-token
   *
   * @tags 登录/注册
   * @name LoginWithUsernameAndPassword
   * @summary 用户名密码登录
   * @request POST:/auth/login/password
   * @secure
   */
  loginWithUsernameAndPassword = (data: AccountPasswordDTO, params: RequestParams = {}) =>
    this.http.request<ResultString, any>({
      path: `/auth/login/password`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
