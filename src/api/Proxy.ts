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

import { FindByIdsQueryPayload } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Proxy<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags trans-proxy-controller
   * @name FindByIds
   * @request POST:/easyTrans/proxy/{targetClass}/findByIds
   * @secure
   */
  findByIds = (targetClass: string, data: FindByIdsQueryPayload, params: RequestParams = {}) =>
    this.http.request<object[], any>({
      path: `/easyTrans/proxy/${targetClass}/findByIds`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags trans-proxy-controller
   * @name FindById
   * @request GET:/easyTrans/proxy/{targetClass}/findById/{id}
   * @secure
   */
  findById = (
    targetClass: string,
    id: string,
    query: {
      uniqueField: string;
      targetFields: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<object, any>({
      path: `/easyTrans/proxy/${targetClass}/findById/${id}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
