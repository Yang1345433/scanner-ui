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
  DepartmentAddDTO,
  ResultDepartmentInfoVO,
  ResultListDepartmentTreeVO,
  ResultListSingleDepartmentVO,
  ResultLong,
  ResultString,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Department<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description 修改组织架构信息
   *
   * @tags 组织架构
   * @name UpdateDepartment
   * @summary 修改
   * @request PUT:/single/department
   * @secure
   */
  updateDepartment = (params: RequestParams = {}) =>
    this.http.request<ResultString, any>({
      path: `/single/department`,
      method: "PUT",
      secure: true,
      ...params,
    });
  /**
   * @description 新增组织架构
   *
   * @tags 组织架构
   * @name AddDepartment
   * @summary 新增
   * @request POST:/single/department
   * @secure
   */
  addDepartment = (data: DepartmentAddDTO, params: RequestParams = {}) =>
    this.http.request<ResultLong, any>({
      path: `/single/department`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description 删除某个组织架构
   *
   * @tags 组织架构
   * @name DeleteDepartment
   * @summary 删除
   * @request DELETE:/single/department
   * @secure
   */
  deleteDepartment = (
    query: {
      /**
       * 被选中的组织架构id
       * @format int64
       */
      id: number;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultString, any>({
      path: `/single/department`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 获取组织架构树结构
   *
   * @tags 组织架构
   * @name DepartmentTree
   * @summary 获取
   * @request GET:/single/department/tree
   * @secure
   */
  departmentTree = (params: RequestParams = {}) =>
    this.http.request<ResultListDepartmentTreeVO, any>({
      path: `/single/department/tree`,
      method: "GET",
      secure: true,
      ...params,
    });
  /**
   * @description 获取不同级别部门的名称列表
   *
   * @tags 组织架构
   * @name DepartmentInfoByNameAndLevel
   * @summary 部门名称列表
   * @request GET:/single/department/level
   * @secure
   */
  departmentInfoByNameAndLevel = (
    query: {
      /**
       * 父部门id
       * @format int64
       */
      parentId?: number;
      /** 名称 */
      name: string;
      /** 级别 */
      level: "LEVEL_1" | "LEVEL_2" | "LEVEL_3" | "LEVEL_4" | "LEVEL_5" | "LEVEL_6";
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultListSingleDepartmentVO, any>({
      path: `/single/department/level`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description 获取指定组织架构信息
   *
   * @tags 组织架构
   * @name DepartmentInfo
   * @summary 信息
   * @request GET:/single/department/info
   * @secure
   */
  departmentInfo = (
    query: {
      /**
       * 组织架构选择对应的id
       * @format int64
       */
      parentId: number;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ResultDepartmentInfoVO, any>({
      path: `/single/department/info`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
}
