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

import { ResultListAuthorityEnum } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Authority<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags 权限接口
   * @name GetLoginUserAuthority
   * @summary 当前登录用户权限
   * @request GET:/auth/authority
   * @secure
   */
  getLoginUserAuthority = (params: RequestParams = {}) =>
    this.http.request<ResultListAuthorityEnum, any>({
      path: `/auth/authority`,
      method: "GET",
      secure: true,
      ...params,
    });
}
