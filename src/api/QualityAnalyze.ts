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

import { QualityAnalyzeAddDTO, ResultLong, ResultString } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class QualityAnalyze<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description 新增质量检验
   *
   * @tags 质量检验报告
   * @name QualityAnalyzeAdd
   * @summary 新增
   * @request POST:/single/qualityAnalyze/add
   * @secure
   */
  qualityAnalyzeAdd = (data: QualityAnalyzeAddDTO, params: RequestParams = {}) =>
    this.http.request<ResultLong, any>({
      path: `/single/qualityAnalyze/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 质量检验报告分页
   *
   * @tags 质量检验报告
   * @name QualityAnalyzePage
   * @summary 分页
   * @request GET:/single/qualityAnalyze/page
   * @secure
   */
  qualityAnalyzePage = (
    query: {
      /** 当前页码 */
      page: number;
      /** 每页条数 */
      pageSize: number;
      /** 报告名称 */
      name?: string;
      /** 报告生成起始时间(yyyy-MM-dd) */
      startDate?: string;
      /** 报告生成结束时间(yyyy-MM-dd) */
      endDate?: string;
      /** 报告生成人 */
      user?: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultString, any>({
      path: `/single/qualityAnalyze/page`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
