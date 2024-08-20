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
  OperatingIntervalDTO,
  OperationDTO,
  OperationReportDTO,
  ResultListOperationModelBO,
  ResultListOperationOutlineVO,
  ResultLong,
  ResultOperationDetailVO,
  ResultPageResultOperationVO,
  ResultString,
  SkateboardDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Operation<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags 运维
   * @name OperationPage
   * @summary 分页
   * @request GET:/single/operation
   * @secure
   */
  operationPage = (
    query: {
      /** 当前页码 */
      page: number;
      /** 每页条数 */
      pageSize: number;
      /** 组织架构选定对象的id */
      parentId: number;
      /** 序列号 */
      serialNumber?: string;
      /** 型面名称 */
      modelName?: string;
      /** 物料号 */
      materialNumber?: string;
      /** 滑板类型：SINGLE(单滑板)    DOUBLE_FRONT(双滑板-前滑板)    DOUBLE_BACK(双滑板-后滑板)    TRIPLE_FRONT(三滑板-前滑板)    TRIPLE_MIDDLE(三滑板-中滑板)    TRIPLE_BACK(三滑板-后滑板) */
      skateboardType?: string;
      /** 材质类型: PURE_CARBON(纯碳)    COPPER_BASE_ALLOY(铜基合金)    CARBO(碳碳)    METALLIZING(浸金属) */
      materialType?: string;
      /** 累计里程 */
      totalDistance?: string;
      /** 扫描人 */
      scanner?: string;
      /** 扫描时间查询开始时间(yyyy-MM-dd) */
      startDate?: string;
      /** 扫描时间查询结束时间(yyyy-MM-dd) */
      endDate?: string;
      /** 运维滑板状态：NOT_ANALYZED(未分析)    ANALYZING(分析中)    PASS(已合格)    NOT_REPAIR(未修复)    REPAIRED(已修复) */
      status?: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultPageResultOperationVO, any>({
      path: `/single/operation`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags 运维
   * @name OperationUpdate
   * @summary 修改
   * @request PUT:/single/operation
   * @secure
   */
  operationUpdate = (
    query: {
      /**
       * 运维滑板id
       * @format int64
       */
      id: number;
    },
    data: SkateboardDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<ResultString, any>({
      path: `/single/operation`,
      method: "PUT",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 下载报表
   *
   * @tags 运维
   * @name DownloadOperationReport
   * @summary 报告
   * @request POST:/single/operation/report
   * @secure
   */
  downloadOperationReport = (data: OperationReportDTO, params: RequestParams = {}) =>
    this.http.request<ResultString, any>({
      path: `/single/operation/report`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 导入成功后会返回对应的id
   *
   * @tags 运维
   * @name OperatingIntervalInput
   * @summary 导入
   * @request POST:/single/operation/operatingInterval
   * @secure
   */
  operatingIntervalInput = (
    query: {
      /**
       * 运维滑板id
       * @format int64
       */
      id: number;
    },
    data: OperatingIntervalDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<ResultLong, any>({
      path: `/single/operation/operatingInterval`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 运维
   * @name OperationDelete
   * @summary 删除
   * @request POST:/single/operation/delete
   * @secure
   */
  operationDelete = (data: number[], params: RequestParams = {}) =>
    this.http.request<ResultString, any>({
      path: `/single/operation/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 新增成功后会返回新增对象的id
   *
   * @tags 运维
   * @name OperationAdd
   * @summary 新增
   * @request POST:/single/operation/add
   * @secure
   */
  operationAdd = (
    query: {
      /**
       * 组织架构选择对应的id
       * @format int64
       */
      parentId: number;
    },
    data: OperationDTO,
    params: RequestParams = {},
  ) =>
    this.http.request<ResultLong, any>({
      path: `/single/operation/add`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 根据名称获取概要的list列表
   *
   * @tags 运维
   * @name OperationOutlines
   * @summary 概要
   * @request GET:/single/operation/outline
   * @secure
   */
  operationOutlines = (
    query: {
      /** 名称 */
      name: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultListOperationOutlineVO, any>({
      path: `/single/operation/outline`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 获取运维滑板的详细信息
   *
   * @tags 运维
   * @name OperationDetail
   * @summary 信息
   * @request GET:/single/operation/detail/{id}
   * @secure
   */
  operationDetail = (id: number, params: RequestParams = {}) =>
    this.http.request<ResultOperationDetailVO, any>({
      path: `/single/operation/detail/${id}`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 分析出对应的分析结果
   *
   * @tags 运维
   * @name OperationAnalyze
   * @summary 分析
   * @request GET:/single/operation/analyze
   * @secure
   */
  operationAnalyze = (
    query: {
      /**
       * 滑板id
       * @format int64
       */
      id: number;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultString, any>({
      path: `/single/operation/analyze`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 根据提供的运维滑板id返回对应的滑板的模型列表
   *
   * @tags 运维检验
   * @name OperationModels
   * @summary 滑板模型列表
   * @request GET:/api/operation
   * @secure
   */
  operationModels = (
    query: {
      /** @format int64 */
      id: number;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultListOperationModelBO, any>({
      path: `/api/operation`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
