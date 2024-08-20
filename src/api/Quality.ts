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
  QualityAddDTO,
  QualityDetailDTO,
  ResultListQualitySkateboardVO,
  ResultLong,
  ResultPageResultQualityVO,
  ResultQualityDetailVO,
  ResultString,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Quality<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags 质量
   * @name QualityPage
   * @summary 分页
   * @request GET:/single/quality
   * @secure
   */
  qualityPage = (
    query: {
      /** 当前页码 */
      page: number;
      /** 每页条数 */
      pageSize: number;
      /** 合同编号 */
      contractNumber?: string;
      /** 扫描人 */
      scanner?: string;
      /** 扫描日期开始时间(yyyy-MM-dd) */
      scanningStartDate?: string;
      /** 扫描日期结束时间(yyyy-MM-dd) */
      scanningEndDate?: string;
      /** 项目名称 */
      projectName?: string;
      /** 项目编号 */
      projectCode?: string;
      /** 单位名称 */
      cliqueName?: string;
      /** 部室 */
      department?: string;
      /** 检验人 */
      inspector?: string;
      /** 检验开始日期(yyyy-MM-dd) */
      inspectionStartDate?: string;
      /** 检验结束日期(yyyy-MM-dd) */
      inspectionEndDate?: string;
      /** 采购方/供应方 */
      user?: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultPageResultQualityVO, any>({
      path: `/single/quality`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 质量
   * @name QualityUpdate
   * @summary 修改
   * @request PUT:/single/quality
   * @secure
   */
  qualityUpdate = (data: QualityDetailDTO, params: RequestParams = {}) =>
    this.http.request<ResultString, any>({
      path: `/single/quality`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 新增成功后会返回新增对象的id
   *
   * @tags 质量
   * @name QualityAdd
   * @summary 新增
   * @request POST:/single/quality
   * @secure
   */
  qualityAdd = (data: QualityAddDTO, params: RequestParams = {}) =>
    this.http.request<ResultLong, any>({
      path: `/single/quality`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 质量
   * @name QualityDelete
   * @summary 删除
   * @request POST:/single/quality/delete
   * @secure
   */
  qualityDelete = (data: number[], params: RequestParams = {}) =>
    this.http.request<ResultString, any>({
      path: `/single/quality/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 质量
   * @name QualityDetail
   * @summary 详情
   * @request GET:/single/quality/detail
   * @secure
   */
  qualityDetail = (
    query: {
      /**
       * 质量检测id
       * @format int64
       */
      id: number;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultQualityDetailVO, any>({
      path: `/single/quality/detail`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 根据名称查询质量检测的滑板
   *
   * @tags 质量
   * @name QualitiesByName
   * @summary 名称查询
   * @request GET:/single/quality/byName
   * @secure
   */
  qualitiesByName = (
    query: {
      /** 名称 */
      name: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultListQualitySkateboardVO, any>({
      path: `/single/quality/byName`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
