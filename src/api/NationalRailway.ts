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
  NationalRailwayDTO,
  ResultLong,
  ResultNationalRailwayDetailVO,
  ResultObject,
  ResultPageResultNationalRailwayVO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class NationalRailway<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags 国铁项目
   * @name NationalRailwayPage
   * @summary 分页
   * @request GET:/project/nationalRailway
   * @secure
   */
  nationalRailwayPage = (
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
    this.http.request<ResultPageResultNationalRailwayVO, any>({
      path: `/project/nationalRailway`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 国铁项目
   * @name NationalRailwayUpdate
   * @summary 修改
   * @request PUT:/project/nationalRailway
   * @secure
   */
  nationalRailwayUpdate = (data: NationalRailwayDTO, params: RequestParams = {}) =>
    this.http.request<ResultObject, any>({
      path: `/project/nationalRailway`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 将会返回此次新增项目的id，可能用于后面的数据文件上传操作
   *
   * @tags 国铁项目
   * @name NationalRailwayAdd
   * @summary 新增
   * @request POST:/project/nationalRailway
   * @secure
   */
  nationalRailwayAdd = (data: NationalRailwayDTO, params: RequestParams = {}) =>
    this.http.request<ResultLong, any>({
      path: `/project/nationalRailway`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 国铁项目
   * @name NationalRailwayDetail
   * @summary 详细
   * @request GET:/project/nationalRailway/{id}
   * @secure
   */
  nationalRailwayDetail = (id: number, params: RequestParams = {}) =>
    this.http.request<ResultNationalRailwayDetailVO, any>({
      path: `/project/nationalRailway/${id}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 国铁项目
   * @name NationalRailwayDelete
   * @summary 删除
   * @request DELETE:/project/nationalRailway/{id}
   * @secure
   */
  nationalRailwayDelete = (id: number, params: RequestParams = {}) =>
    this.http.request<ResultObject, any>({
      path: `/project/nationalRailway/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
