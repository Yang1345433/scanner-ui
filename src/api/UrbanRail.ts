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

import {
  ResultLong,
  ResultObject,
  ResultPageResultUrbanRailVO,
  ResultUrbanRailDetailVO,
  UrbanRailDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class UrbanRail<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags 城轨车辆项目
   * @name UrbanRailPage
   * @summary 分页
   * @request GET:/project/urbanRail
   * @secure
   */
  urbanRailPage = (
    query: {
      /** 当前页码 */
      page: number;
      /** 每页条数 */
      pageSize: number;
      /** 项目名称 */
      projectName?: string;
      /** 检测起始时间 */
      detectionStartDate?: string;
      /** 检测结束时间 */
      detectionEndDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultPageResultUrbanRailVO, any>({
      path: `/project/urbanRail`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 城轨车辆项目
   * @name UrbanRailUpdate
   * @summary 修改
   * @request PUT:/project/urbanRail
   * @secure
   */
  urbanRailUpdate = (data: UrbanRailDTO, params: RequestParams = {}) =>
    this.http.request<ResultObject, any>({
      path: `/project/urbanRail`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 将会返回此次新增项目的id
   *
   * @tags 城轨车辆项目
   * @name UrbanRailAdd
   * @summary 新增
   * @request POST:/project/urbanRail
   * @secure
   */
  urbanRailAdd = (data: UrbanRailDTO, params: RequestParams = {}) =>
    this.http.request<ResultLong, any>({
      path: `/project/urbanRail`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 城轨车辆项目
   * @name UrbanRailDetail
   * @summary 详细
   * @request GET:/project/urbanRail/{id}
   * @secure
   */
  urbanRailDetail = (id: number, params: RequestParams = {}) =>
    this.http.request<ResultUrbanRailDetailVO, any>({
      path: `/project/urbanRail/${id}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 城轨车辆项目
   * @name UrbanRailDelete
   * @summary 删除
   * @request DELETE:/project/urbanRail/{id}
   * @secure
   */
  urbanRailDelete = (id: number, params: RequestParams = {}) =>
    this.http.request<ResultObject, any>({
      path: `/project/urbanRail/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
