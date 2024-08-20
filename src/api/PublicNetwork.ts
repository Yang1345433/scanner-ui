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

import { ResultPublicDataVO, ResultString } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class PublicNetwork<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description 导入公网数据，会返回一个url用于上传操作
   *
   * @tags 公网数据
   * @name UploadPublicNetworkData
   * @summary 导入
   * @request POST:/single/publicNetwork/upload
   * @secure
   */
  uploadPublicNetworkData = (
    query: {
      /** 文件名 */
      name: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultString, any>({
      path: `/single/publicNetwork/upload`,
      method: "POST",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 开始分析excel数据，在导入操作成功后调用
   *
   * @tags 公网数据
   * @name StartUploadPublicNetworkDataAnalyze
   * @summary 分析
   * @request POST:/single/publicNetwork/analyze
   * @secure
   */
  startUploadPublicNetworkDataAnalyze = (params: RequestParams = {}) =>
    this.http.request<ResultString, any>({
      path: `/single/publicNetwork/analyze`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * @description 获取选择的公网数据
   *
   * @tags 公网数据
   * @name GetPublicNetworkData
   * @summary 数据
   * @request GET:/single/publicNetwork/data
   * @secure
   */
  getPublicNetworkData = (
    query: {
      /** 公网单种类: VOLTAGE(电压)    ELECTRICITY(电流)    SPEED(速度)    PULLOUT(拉出)    GUIDE_HEIGHT(导高)    LEFT_HARD_SPOT(左硬点)    RIGHT_HARD_SPOT(右硬点)    ABRASION(磨损)    ARC_DURATION(弧形持续时间)    TEMPERATURE(温度) */
      field: string;
      /** 车辆号 */
      trainNumber: string;
      /** 开始时间 */
      startTime: string;
      /** 结束时间 */
      endTime: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultPublicDataVO, any>({
      path: `/single/publicNetwork/data`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
