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
  QualityModelAddDTO,
  QualityModelDetailDTO,
  ResultLong,
  ResultPageResultQualityModelVO,
  ResultQualityModelVO,
  ResultString,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class QualityModel<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags 质量模型
   * @name QualityModelPage
   * @summary 分页
   * @request GET:/single/quality-model
   * @secure
   */
  qualityModelPage = (
    query: {
      /** 当前页码 */
      page: number;
      /** 每页条数 */
      pageSize: number;
      /** 型面名称 */
      modelName?: string;
      /** 物料号 */
      materialNumber?: string;
      /** 滑板类型：SINGLE(单滑板)    DOUBLE_FRONT(双滑板-前滑板)    DOUBLE_BACK(双滑板-后滑板)    TRIPLE_FRONT(三滑板-前滑板)    TRIPLE_MIDDLE(三滑板-中滑板)    TRIPLE_BACK(三滑板-后滑板) */
      skateboardType?: string;
      /** 材质类型: PURE_CARBON(纯碳)    COPPER_BASE_ALLOY(铜基合金)    CARBO(碳碳)    METALLIZING(浸金属) */
      materialType?: string;
      /** 版本号 */
      versionNo?: string;
      /** 供货商 */
      supplier?: string;
      /** 供货起始日期(yyyy-MM-dd) */
      supplierStartDate?: string;
      /** 供货结束日期(yyyy-MM-dd) */
      supplierEndDate?: string;
      /** 采购方 */
      purchaser?: string;
      /** 采购起始日期(yyyy-MM-dd) */
      purchaserStartDate?: string;
      /** 采购结束日期(yyyy-MM-dd) */
      purchaserEndDate?: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultPageResultQualityModelVO, any>({
      path: `/single/quality-model`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 质量模型
   * @name QualityModelUpdate
   * @summary 修改
   * @request PUT:/single/quality-model
   * @secure
   */
  qualityModelUpdate = (data: QualityModelDetailDTO, params: RequestParams = {}) =>
    this.http.request<ResultString, any>({
      path: `/single/quality-model`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 新增成功后会返回新增对象的id
   *
   * @tags 质量模型
   * @name QualityModelAdd
   * @summary 新增
   * @request POST:/single/quality-model
   * @secure
   */
  qualityModelAdd = (data: QualityModelAddDTO, params: RequestParams = {}) =>
    this.http.request<ResultLong, any>({
      path: `/single/quality-model`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 质量模型
   * @name QualityModelDelete
   * @summary 删除
   * @request POST:/single/quality-model/delete
   * @secure
   */
  qualityModelDelete = (data: number[], params: RequestParams = {}) =>
    this.http.request<ResultString, any>({
      path: `/single/quality-model/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 质量模型
   * @name QualityModelDetail
   * @summary 详情
   * @request GET:/single/quality-model/detail
   * @secure
   */
  qualityModelDetail = (
    query: {
      /**
       * 模型id
       * @format int64
       */
      id: number;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultQualityModelVO, any>({
      path: `/single/quality-model/detail`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
