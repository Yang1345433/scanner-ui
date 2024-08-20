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

import { ResultObject } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Logout<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags 登出
   * @name Logout
   * @summary 登出当前账户
   * @request DELETE:/auth/logout
   * @secure
   */
  logout = (params: RequestParams = {}) =>
    this.http.request<ResultObject, any>({
      path: `/auth/logout`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
