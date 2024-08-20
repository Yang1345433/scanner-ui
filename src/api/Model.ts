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

import { ResultString } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Model<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description 将返回一个url用于下载模型文件
   *
   * @tags 模型
   * @name DownloadModel
   * @summary 下载
   * @request GET:/single/model
   * @secure
   */
  downloadModel = (
    query: {
      /**
       * 模型id
       * @format int64
       */
      id: number;
      /** 模型所属对象类型:OPERATION(运维检验磨耗模型)    OPERATION_MODEL(运维检验标准模型)    QUALITY(质量检验磨耗模型)    QUALITY_MODEL(质量检验标准模型) */
      type: "OPERATION" | "OPERATION_MODEL" | "QUALITY" | "QUALITY_MODEL";
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultString, any>({
      path: `/single/model`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 将返回一个url用于上传模型文件
   *
   * @tags 模型
   * @name UploadModel
   * @summary 上传
   * @request POST:/single/model
   * @secure
   */
  uploadModel = (
    query: {
      /**
       * 模型id
       * @format int64
       */
      id: number;
      /** 模型所属对象类型:OPERATION(运维检验磨耗模型)    OPERATION_MODEL(运维检验标准模型)    QUALITY(质量检验磨耗模型)    QUALITY_MODEL(质量检验标准模型) */
      type: "OPERATION" | "OPERATION_MODEL" | "QUALITY" | "QUALITY_MODEL";
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultString, any>({
      path: `/single/model`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
}
