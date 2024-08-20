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

/** 质量检验详情（修改） */
export interface QualityDetailDTO {
  /**
   * 质量检测ID
   * @format int64
   */
  id: number;
  /** 单位名称 */
  cliqueName: string;
  /** 部室 */
  department: string;
  /** 检验人 */
  inspector: string;
  /**
   * 检验日期(yyyy-MM-dd)
   * @format date
   */
  inspectionDate: string;
  /** 采购方/供货方 */
  user: string;
  /** 项目名称 */
  projectName: string;
  /** 项目编号 */
  projectCode: string;
  /** 合同编号 */
  contractNumber: string;
  /** 扫描人 */
  scanner: string;
  /**
   * 扫描日期(yyyy-MM-dd)
   * @format date
   */
  scanningDate: string;
  /** 滑板变更信息 */
  skateboards: QualitySkateboardUpdateDTO[];
}

/** 滑板更新 */
export interface QualitySkateboardUpdateDTO {
  /**
   * 滑板id,可以为null，为null的是新增滑板
   * @format int64
   */
  id?: number;
  /** 名称 */
  modelName: string;
  /** 物料号 */
  materialNumber: string;
  /** 滑板类型：SINGLE(单滑板)    DOUBLE_FRONT(双滑板-前滑板)    DOUBLE_BACK(双滑板-后滑板)    TRIPLE_FRONT(三滑板-前滑板)    TRIPLE_MIDDLE(三滑板-中滑板)    TRIPLE_BACK(三滑板-后滑板) */
  skateboardType: "SINGLE" | "DOUBLE_FRONT" | "DOUBLE_BACK" | "TRIPLE_FRONT" | "TRIPLE_MIDDLE" | "TRIPLE_BACK";
  /** 材质类型: PURE_CARBON(纯碳)    COPPER_BASE_ALLOY(铜基合金)    CARBO(碳碳)    METALLIZING(浸金属) */
  materialType: "PURE_CARBON" | "COPPER_BASE_ALLOY" | "CARBO" | "METALLIZING";
  /** 版本号 */
  versionNo: string;
  /** 序列号 */
  serialNumber: string;
}

/** 错误的具体信息 RFC 7807格式 */
export interface ProblemDetail {
  /** @format uri */
  type?: string;
  title?: string;
  /** @format int32 */
  status?: number;
  detail?: string;
  /** @format uri */
  instance?: string;
  properties?: Record<string, object>;
}

export interface ResultString {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 返回的具体数据 */
  data?: string;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 质量模型详情 */
export interface QualityModelDetailDTO {
  /**
   * 模型id
   * @format int64
   */
  id: number;
  /** 型面名称 */
  modelName: string;
  /** 物料号 */
  materialNumber: string;
  /** 滑板类型：SINGLE(单滑板)    DOUBLE_FRONT(双滑板-前滑板)    DOUBLE_BACK(双滑板-后滑板)    TRIPLE_FRONT(三滑板-前滑板)    TRIPLE_MIDDLE(三滑板-中滑板)    TRIPLE_BACK(三滑板-后滑板) */
  skateboardType: "SINGLE" | "DOUBLE_FRONT" | "DOUBLE_BACK" | "TRIPLE_FRONT" | "TRIPLE_MIDDLE" | "TRIPLE_BACK";
  /** 材质类型: PURE_CARBON(纯碳)    COPPER_BASE_ALLOY(铜基合金)    CARBO(碳碳)    METALLIZING(浸金属) */
  materialType: "PURE_CARBON" | "COPPER_BASE_ALLOY" | "CARBO" | "METALLIZING";
  /** 版本号 */
  versionNo: string;
  /** 供货商 */
  supplier: string;
  /**
   * 供货日期(yyyy-MM-dd)
   * @format date
   */
  supplierDate: string;
  /** 采购方 */
  purchaser: string;
  /**
   * 采购日期(yyyy-MM-dd)
   * @format date
   */
  purchaserDate: string;
  /** 配属信息 */
  modelInfo: string;
  /** 模型文件类型：THREE_DIMENSIONAL(三维（如stp）)    TWO_DIMENSIONAL(二维（如pdf）)    STL(扫描模型（stl）) */
  modelFileType: "THREE_DIMENSIONAL" | "TWO_DIMENSIONAL" | "STL";
  /** 项目名称 */
  projectName: string;
  /** 项目编号 */
  projectNo: string;
}

/** 合作关系 */
export interface OperationPartnerDTO {
  /** 供应商 */
  supplier: string;
  /**
   * 供货日期(yyyy-MM-dd)
   * @format date
   */
  supplierDate: string;
  /** 采购商 */
  purchaser: string;
  /**
   * 采购日期(yyyy-MM-dd)
   * @format date
   */
  purchaserDate: string;
}

/** 滑板信息 */
export interface SkateboardDTO {
  /** 名称 */
  modelName: string;
  /** 物料号 */
  materialNumber: string;
  /** 滑板类型：SINGLE(单滑板)    DOUBLE_FRONT(双滑板-前滑板)    DOUBLE_BACK(双滑板-后滑板)    TRIPLE_FRONT(三滑板-前滑板)    TRIPLE_MIDDLE(三滑板-中滑板)    TRIPLE_BACK(三滑板-后滑板) */
  skateboardType: "SINGLE" | "DOUBLE_FRONT" | "DOUBLE_BACK" | "TRIPLE_FRONT" | "TRIPLE_MIDDLE" | "TRIPLE_BACK";
  /** 序列号 */
  serialNumber: string;
  /** 材质类型: PURE_CARBON(纯碳)    COPPER_BASE_ALLOY(铜基合金)    CARBO(碳碳)    METALLIZING(浸金属) */
  materialType: "PURE_CARBON" | "COPPER_BASE_ALLOY" | "CARBO" | "METALLIZING";
  /** 合作关系 */
  partner: OperationPartnerDTO;
  /** 数据阈值 */
  thresholdValue: ThresholdValue;
}

/** 数据阈值 */
export interface ThresholdValue {
  /**
   * 剩余厚度
   * @format float
   */
  thickness: number;
  /**
   * 磨耗量
   * @format float
   */
  wearLoss: number;
  /**
   * 型面异常系数
   * @format float
   */
  anomalyRate: number;
  /**
   * 磨耗率
   * @format float
   */
  wearRate: number;
  /**
   * 此滑板的标准模型id
   * @format int64
   */
  standardModelId: number;
  /** 此滑板的标准模型 */
  standardModel: string;
}

/** 运维模型详情 */
export interface OperationModelDetailDTO {
  /**
   * 模型id
   * @format int64
   */
  id: number;
  /** 型面名称 */
  modelName: string;
  /** 物料号 */
  materialNumber: string;
  /** 滑板类型：SINGLE(单滑板)    DOUBLE_FRONT(双滑板-前滑板)    DOUBLE_BACK(双滑板-后滑板)    TRIPLE_FRONT(三滑板-前滑板)    TRIPLE_MIDDLE(三滑板-中滑板)    TRIPLE_BACK(三滑板-后滑板) */
  skateboardType: "SINGLE" | "DOUBLE_FRONT" | "DOUBLE_BACK" | "TRIPLE_FRONT" | "TRIPLE_MIDDLE" | "TRIPLE_BACK";
  /** 材质类型: PURE_CARBON(纯碳)    COPPER_BASE_ALLOY(铜基合金)    CARBO(碳碳)    METALLIZING(浸金属) */
  materialType: "PURE_CARBON" | "COPPER_BASE_ALLOY" | "CARBO" | "METALLIZING";
  /** 版本号 */
  versionNo: string;
  /** 供货商 */
  supplier: string;
  /**
   * 供货日期(yyyy-MM-dd)
   * @format date
   */
  supplierDate: string;
  /** 采购方 */
  purchaser: string;
  /**
   * 采购日期(yyyy-MM-dd)
   * @format date
   */
  purchaserDate: string;
  /** 配属信息 */
  modelInfo: string;
  /** 模型文件类型：THREE_DIMENSIONAL(三维（如stp）)    TWO_DIMENSIONAL(二维（如pdf）)    STL(扫描模型（stl）) */
  modelFileType: "THREE_DIMENSIONAL" | "TWO_DIMENSIONAL" | "STL";
}

/** 运行区间 */
export interface OperatingIntervalDTO {
  /** 起始地 */
  startPlace: string;
  /** 目的地 */
  endPlace: string;
  /** 车辆运行方向分类:UP("上行") DOWN("下行") */
  runningDirection: "UP" | "DOWN";
  /**
   * 运行里程（目前还不知道什么单位）
   * @format float
   */
  mileage: number;
}

/** 受电弓 */
export interface PantographDTO {
  /** 受电弓：名称 */
  pantographName: string;
  /** 受电弓：物料号 */
  materialNumber: string;
  /** 受电弓：型号 */
  model: string;
  /** 受电弓：序列号 */
  serialNumber: string;
  /** 受电弓：版本号 */
  versionNumber: string;
  /** 受电弓：供货商 */
  supplier: string;
  /**
   * 受电弓：供货日期
   * @format date-time
   */
  deliveryDate: string;
  /** 受电弓：修成级别 */
  repairLevel: string;
  /**
   * 受电弓，修成日期
   * @format date-time
   */
  repairDate: string;
}

/** 城轨 单位信息 */
export interface UrbanRailCliqueDTO {
  /** 公司名称 */
  companyName: string;
  /** 线号 */
  routeNumber: string;
  /** 部室 */
  department: string;
}

/** 城轨车辆项目表单 */
export interface UrbanRailDTO {
  /** 项目名称 */
  projectName: string;
  /** 城轨 单位信息 */
  urbanRailClique: UrbanRailCliqueDTO;
  /** 车辆信息 */
  vehicleInformation: VehicleInformationDTO;
  /** 受电弓 */
  pantograph: PantographDTO;
}

/** 车辆信息 */
export interface VehicleInformationDTO {
  /** 车辆信息：列车号 */
  trainNumber: string;
  /** 车辆信息：运行区间 */
  operatingIntervals: OperatingIntervalDTO[];
  /** 车辆信息：车辆号 */
  vehicleNumber: string;
}

export interface ResultObject {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 返回的具体数据 */
  data?: object;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 国铁单位信息 */
export interface NationalRailwayCliqueDTO {
  /** 国铁单位信息：集团名称 */
  cliqueName: string;
  /** 国铁单位信息：车辆段 */
  carDepot: string;
  /** 国铁单位信息：部室 */
  department: string;
}

/** 国铁车辆项目表单 */
export interface NationalRailwayDTO {
  /** 项目名称 */
  projectName: string;
  /** 国铁单位信息 */
  nationalRailwayClique: NationalRailwayCliqueDTO;
  /** 车辆信息 */
  vehicleInformation: VehicleInformationDTO;
  /** 受电弓 */
  pantograph: PantographDTO;
}

/** 质量检验新增 */
export interface QualityAddDTO {
  /** 单位名称 */
  cliqueName: string;
  /** 部室 */
  department: string;
  /** 检验人 */
  inspector: string;
  /**
   * 检验日期(yyyy-MM-dd)
   * @format date
   */
  inspectionDate: string;
  /** 采购方/供货方 */
  user: string;
  /** 项目名称 */
  projectName: string;
  /** 项目编号 */
  projectCode: string;
  /** 合同编号 */
  contractNumber: string;
  /** 扫描人 */
  scanner: string;
  /**
   * 扫描日期(yyyy-MM-dd)
   * @format date
   */
  scanningDate: string;
  /** 滑板信息 */
  skateboards: QualitySkateboardDTO[];
}

/** 滑板信息 */
export interface QualitySkateboardDTO {
  /** 名称 */
  modelName: string;
  /** 物料号 */
  materialNumber: string;
  /** 滑板类型：SINGLE(单滑板)    DOUBLE_FRONT(双滑板-前滑板)    DOUBLE_BACK(双滑板-后滑板)    TRIPLE_FRONT(三滑板-前滑板)    TRIPLE_MIDDLE(三滑板-中滑板)    TRIPLE_BACK(三滑板-后滑板) */
  skateboardType: "SINGLE" | "DOUBLE_FRONT" | "DOUBLE_BACK" | "TRIPLE_FRONT" | "TRIPLE_MIDDLE" | "TRIPLE_BACK";
  /** 材质类型: PURE_CARBON(纯碳)    COPPER_BASE_ALLOY(铜基合金)    CARBO(碳碳)    METALLIZING(浸金属) */
  materialType: "PURE_CARBON" | "COPPER_BASE_ALLOY" | "CARBO" | "METALLIZING";
  /** 版本号 */
  versionNo: string;
  /** 序列号 */
  serialNumber: string;
}

export interface ResultLong {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /**
   * 返回的具体数据
   * @format int64
   */
  data?: number;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 质量检验新增参数 */
export interface QualityAnalyzeAddDTO {
  /** 质量检验模型ids */
  qualityIds: number[];
  /** 质量检验分析报告照片以及相关信息 */
  surface: QualityAnalyzePhoto;
  /** 质量检验分析报告照片以及相关信息 */
  fallBlock: QualityAnalyzePhoto;
  /** 质量检验分析报告照片以及相关信息 */
  crack: QualityAnalyzePhoto;
  /** 是否合格 */
  isPass: boolean;
  /** 最终意见 */
  reason: string;
}

/** 质量检验分析报告照片以及相关信息 */
export interface QualityAnalyzePhoto {
  /** 图片名称 */
  names: string[];
  /** 图片对应结论 */
  reason: string;
}

/** 新增型面信息 */
export interface QualityModelAddDTO {
  /** 型面名称 */
  modelName: string;
  /** 物料号 */
  materialNumber: string;
  /** 滑板类型：SINGLE(单滑板)    DOUBLE_FRONT(双滑板-前滑板)    DOUBLE_BACK(双滑板-后滑板)    TRIPLE_FRONT(三滑板-前滑板)    TRIPLE_MIDDLE(三滑板-中滑板)    TRIPLE_BACK(三滑板-后滑板) */
  skateboardType: "SINGLE" | "DOUBLE_FRONT" | "DOUBLE_BACK" | "TRIPLE_FRONT" | "TRIPLE_MIDDLE" | "TRIPLE_BACK";
  /** 材质类型: PURE_CARBON(纯碳)    COPPER_BASE_ALLOY(铜基合金)    CARBO(碳碳)    METALLIZING(浸金属) */
  materialType: "PURE_CARBON" | "COPPER_BASE_ALLOY" | "CARBO" | "METALLIZING";
  /** 版本号 */
  versionNo: string;
  /** 供货商 */
  supplier: string;
  /**
   * 供货日期(yyyy-MM-dd)
   * @format date
   */
  supplierDate: string;
  /** 采购方 */
  purchaser: string;
  /**
   * 采购日期(yyyy-MM-dd)
   * @format date
   */
  purchaserDate: string;
  /** 配属信息 */
  modelInfo: string;
  /** 模型文件类型：THREE_DIMENSIONAL(三维（如stp）)    TWO_DIMENSIONAL(二维（如pdf）)    STL(扫描模型（stl）) */
  modelFileType: "THREE_DIMENSIONAL" | "TWO_DIMENSIONAL" | "STL";
  /** 项目名称 */
  projectName: string;
  /** 项目编号 */
  projectNo: string;
}

export interface OperationReportDTO {
  /** 运维滑板id */
  operationIds: number[];
  /** 结论 */
  result: string;
}

/** 单位信息 */
export interface CliqueDTO {
  /** 集团或公司名称 */
  cliqueName: string;
  /** 车辆段 */
  carDepot: string;
  /** 部室 */
  department: string;
}

/** 运维新增模型 */
export interface OperationDTO {
  /** 单位信息 */
  clique: CliqueDTO;
  /** 车辆信息 */
  vehicleInformation: VehicleInformationDTO;
  /** 受电弓 */
  pantograph: PantographDTO;
  /** 滑板信息 */
  skateboard: SkateboardDTO;
}

/** 运维模型新增 */
export interface OperationModelAddDTO {
  /** 型面名称 */
  modelName: string;
  /** 物料号 */
  materialNumber: string;
  /** 滑板类型：SINGLE(单滑板)    DOUBLE_FRONT(双滑板-前滑板)    DOUBLE_BACK(双滑板-后滑板)    TRIPLE_FRONT(三滑板-前滑板)    TRIPLE_MIDDLE(三滑板-中滑板)    TRIPLE_BACK(三滑板-后滑板) */
  skateboardType: "SINGLE" | "DOUBLE_FRONT" | "DOUBLE_BACK" | "TRIPLE_FRONT" | "TRIPLE_MIDDLE" | "TRIPLE_BACK";
  /** 材质类型: PURE_CARBON(纯碳)    COPPER_BASE_ALLOY(铜基合金)    CARBO(碳碳)    METALLIZING(浸金属) */
  materialType: "PURE_CARBON" | "COPPER_BASE_ALLOY" | "CARBO" | "METALLIZING";
  /** 版本号 */
  versionNo: string;
  /** 供货商 */
  supplier: string;
  /**
   * 供货日期(yyyy-MM-dd)
   * @format date
   */
  supplierDate: string;
  /** 采购方 */
  purchaser: string;
  /**
   * 采购日期(yyyy-MM-dd)
   * @format date
   */
  purchaserDate: string;
  /** 配属信息 */
  modelInfo: string;
  /** 模型文件类型：THREE_DIMENSIONAL(三维（如stp）)    TWO_DIMENSIONAL(二维（如pdf）)    STL(扫描模型（stl）) */
  modelFileType: "THREE_DIMENSIONAL" | "TWO_DIMENSIONAL" | "STL";
}

/** 组织架构新增对象 */
export interface DepartmentAddDTO {
  /** 单位信息 */
  clique: CliqueDTO;
  /** 车辆信息 */
  vehicleInformation: VehicleInformationDTO;
  /** 受电弓 */
  pantograph: PantographDTO;
}

export interface FindByIdsQueryPayload {
  ids?: string[];
  uniqueField?: string;
  targetFields?: string[];
}

/** 注册表单 */
export interface RegisterAccountPasswordDTO {
  /** 账号 */
  account: string;
  /** 密码 */
  password: string;
  /** 注册权限类型 */
  authority: " ADMIN:管理员" | " OPERATOR:操作员" | " SUPPLIER:供货方";
}

/** 账号密码 */
export interface AccountPasswordDTO {
  /** 账号名 */
  account: string;
  /** 密码 */
  password: string;
}

/** 分页相关数据 */
export interface PageResultQualityVO {
  /**
   * 总条数
   * @format int64
   */
  total: number;
  /** 具体数据 */
  list: QualityVO[];
}

/** 质量检验分页数据 */
export interface QualityVO {
  /**
   * 质量检验id
   * @format int64
   */
  id: number;
  /** 合同编号 */
  contractNumber: string;
  /** 扫描人 */
  scanner: string;
  /**
   * 扫描日期(yyyy-MM-dd)
   * @format date
   */
  scanningDate: string;
  /** 项目名称 */
  projectName: string;
  /** 项目编号 */
  projectCode: string;
  /** 单位名称 */
  cliqueName: string;
  /** 部室 */
  department: string;
  /** 检验人 */
  inspector: string;
  /**
   * 检验日期(yyyy-MM-dd)
   * @format date
   */
  inspectionDate: string;
  /** 采购方/供货方 */
  user: string;
}

export interface ResultPageResultQualityVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 分页相关数据 */
  data?: PageResultQualityVO;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 质量检测详情 */
export interface QualityDetailVO {
  /**
   * 质量检测ID
   * @format int64
   */
  id: number;
  /** 单位名称 */
  cliqueName: string;
  /** 部室 */
  department: string;
  /** 检验人 */
  inspector: string;
  /**
   * 检验日期(yyyy-MM-dd)
   * @format date
   */
  inspectionDate: string;
  /** 采购方/供货方 */
  user: string;
  /** 项目名称 */
  projectName: string;
  /** 项目编号 */
  projectCode: string;
  /** 合同编号 */
  contractNumber: string;
  /** 扫描人 */
  scanner: string;
  /**
   * 扫描日期(yyyy-MM-dd)
   * @format date
   */
  scanningDate: string;
  /** 滑板信息 */
  skateboards: QualitySkateboardVO[];
}

/** 滑板信息 */
export interface QualitySkateboardVO {
  /**
   * 滑板id
   * @format int64
   */
  id: number;
  /** 名称 */
  modelName: string;
  /** 物料号 */
  materialNumber: string;
  /** 滑板类型：SINGLE(单滑板)    DOUBLE_FRONT(双滑板-前滑板)    DOUBLE_BACK(双滑板-后滑板)    TRIPLE_FRONT(三滑板-前滑板)    TRIPLE_MIDDLE(三滑板-中滑板)    TRIPLE_BACK(三滑板-后滑板) */
  skateboardType: "SINGLE" | "DOUBLE_FRONT" | "DOUBLE_BACK" | "TRIPLE_FRONT" | "TRIPLE_MIDDLE" | "TRIPLE_BACK";
  /** 材质类型: PURE_CARBON(纯碳)    COPPER_BASE_ALLOY(铜基合金)    CARBO(碳碳)    METALLIZING(浸金属) */
  materialType: "PURE_CARBON" | "COPPER_BASE_ALLOY" | "CARBO" | "METALLIZING";
  /** 版本号 */
  versionNo: string;
  /** 序列号 */
  serialNumber: string;
  /** 是否合格 */
  isQualified?: boolean;
  /** 不合格意见 */
  unQualifiedReason?: string;
  /** 最终检验意见 */
  finalInspectionResult?: string;
}

export interface ResultQualityDetailVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 质量检测详情 */
  data?: QualityDetailVO;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

export interface ResultListQualitySkateboardVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 返回的具体数据 */
  data?: QualitySkateboardVO[];
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 分页相关数据 */
export interface PageResultQualityModelVO {
  /**
   * 总条数
   * @format int64
   */
  total: number;
  /** 具体数据 */
  list: QualityModelVO[];
}

/** 质量模型信息 */
export interface QualityModelVO {
  /**
   * 模型id
   * @format int64
   */
  id: number;
  /** 型面名称 */
  modelName: string;
  /** 物料号 */
  materialNumber: string;
  /** 滑板类型：SINGLE(单滑板)    DOUBLE_FRONT(双滑板-前滑板)    DOUBLE_BACK(双滑板-后滑板)    TRIPLE_FRONT(三滑板-前滑板)    TRIPLE_MIDDLE(三滑板-中滑板)    TRIPLE_BACK(三滑板-后滑板) */
  skateboardType: "SINGLE" | "DOUBLE_FRONT" | "DOUBLE_BACK" | "TRIPLE_FRONT" | "TRIPLE_MIDDLE" | "TRIPLE_BACK";
  /** 材质类型: PURE_CARBON(纯碳)    COPPER_BASE_ALLOY(铜基合金)    CARBO(碳碳)    METALLIZING(浸金属) */
  materialType: "PURE_CARBON" | "COPPER_BASE_ALLOY" | "CARBO" | "METALLIZING";
  /** 版本号 */
  versionNo: string;
  /** 供货商 */
  supplier: string;
  /**
   * 供货日期(yyyy-MM-dd)
   * @format date
   */
  supplierDate: string;
  /** 采购方 */
  purchaser: string;
  /**
   * 采购日期(yyyy-MM-dd)
   * @format date
   */
  purchaserDate: string;
  /** 配属信息 */
  modelInfo: string;
  /** 模型文件类型：THREE_DIMENSIONAL(三维（如stp）)    TWO_DIMENSIONAL(二维（如pdf）)    STL(扫描模型（stl）) */
  modelFileType: "THREE_DIMENSIONAL" | "TWO_DIMENSIONAL" | "STL";
  /** 项目名称 */
  projectName: string;
  /** 项目编号 */
  projectNo: string;
}

export interface ResultPageResultQualityModelVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 分页相关数据 */
  data?: PageResultQualityModelVO;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

export interface ResultQualityModelVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 质量模型信息 */
  data?: QualityModelVO;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 返回的具体数据 */
export interface PublicDataVO {
  x: number[];
  y: object[];
}

export interface ResultPublicDataVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 返回的具体数据 */
  data?: PublicDataVO;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 分页具体数据 */
export interface OperationVO {
  /**
   * 滑板id
   * @format int64
   */
  id: number;
  /** 序列号 */
  serialNumber: string;
  /** 型面名称 */
  modelName: string;
  /** 物料号 */
  materialNumber: string;
  /** 滑板类型：SINGLE(单滑板)    DOUBLE_FRONT(双滑板-前滑板)    DOUBLE_BACK(双滑板-后滑板)    TRIPLE_FRONT(三滑板-前滑板)    TRIPLE_MIDDLE(三滑板-中滑板)    TRIPLE_BACK(三滑板-后滑板) */
  skateboardType: "SINGLE" | "DOUBLE_FRONT" | "DOUBLE_BACK" | "TRIPLE_FRONT" | "TRIPLE_MIDDLE" | "TRIPLE_BACK";
  /** 材质类型: PURE_CARBON(纯碳)    COPPER_BASE_ALLOY(铜基合金)    CARBO(碳碳)    METALLIZING(浸金属) */
  materialType: "PURE_CARBON" | "COPPER_BASE_ALLOY" | "CARBO" | "METALLIZING";
  /**
   * 累计里程
   * @format float
   */
  totalDistance: number;
  /** 扫描人 */
  scanner: string;
  /**
   * 扫描日期
   * @format date-time
   */
  scanDate: string;
  /** 运维滑板状态：NOT_ANALYZED(未分析)    ANALYZING(分析中)    PASS(已合格)    NOT_REPAIR(未修复)    REPAIRED(已修复) */
  status: "NOT_ANALYZED" | "ANALYZING" | "PASS" | "NOT_REPAIR" | "REPAIRED";
}

/** 分页相关数据 */
export interface PageResultOperationVO {
  /**
   * 总条数
   * @format int64
   */
  total: number;
  /** 具体数据 */
  list: OperationVO[];
}

export interface ResultPageResultOperationVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 分页相关数据 */
  data?: PageResultOperationVO;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 运维滑板概要信息 */
export interface OperationOutlineVO {
  /**
   * id
   * @format int64
   */
  id: number;
  /** 名称 */
  modelName: string;
  /** 序列号 */
  serialNumber: string;
  /** 物料号 */
  materialNumber: string;
  /** 滑板类型：SINGLE(单滑板)    DOUBLE_FRONT(双滑板-前滑板)    DOUBLE_BACK(双滑板-后滑板)    TRIPLE_FRONT(三滑板-前滑板)    TRIPLE_MIDDLE(三滑板-中滑板)    TRIPLE_BACK(三滑板-后滑板) */
  skateboardType: "SINGLE" | "DOUBLE_FRONT" | "DOUBLE_BACK" | "TRIPLE_FRONT" | "TRIPLE_MIDDLE" | "TRIPLE_BACK";
  /** 材质类型: PURE_CARBON(纯碳)    COPPER_BASE_ALLOY(铜基合金)    CARBO(碳碳)    METALLIZING(浸金属) */
  materialType: "PURE_CARBON" | "COPPER_BASE_ALLOY" | "CARBO" | "METALLIZING";
  /**
   * 累计里程
   * @format float
   */
  totalDistance: number;
}

export interface ResultListOperationOutlineVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 返回的具体数据 */
  data?: OperationOutlineVO[];
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 单位信息 */
export interface CliqueVO {
  /** 集团或公司名称 */
  cliqueName: string;
  /** 车辆段 */
  carDepot: string;
  /** 部室 */
  department: string;
}

/** 运行区间详细 */
export interface OperatingIntervalDetailVO {
  /**
   * id
   * @format int64
   */
  id: number;
  /** 起始地 */
  startPlace: string;
  /** 目的地 */
  endPlace: string;
  /** UP(上行)    DOWN(下行) */
  runningDirection: "UP" | "DOWN";
  /**
   * 运行时间：起始时间(yyyy-MM-dd)
   * @format date
   */
  runningStartDate: string;
  /**
   * 运行时间：结束时间(yyyy-MM-dd)
   * @format date
   */
  runningEndDate: string;
  /**
   * 运行里程（km）
   * @format float
   */
  mileage: number;
  /** 扫描人 */
  scanner: string;
  /**
   * 扫描时间
   * @format date-time
   */
  scanningTime: string;
}

/** 运维滑板信息 */
export interface OperationDetailVO {
  /**
   * 滑板id
   * @format int64
   */
  id: number;
  /** 单位信息 */
  clique: CliqueVO;
  /** 车辆信息 */
  vehicleInformation: VehicleInformationVO;
  /** 受电弓 */
  pantograph: PantographVO;
  /** 滑板信息 */
  skateboard: SkateboardVO;
  /** 型面修复记录，每一项都是一个时间（yyyy-MM-dd HH:mm:ss） */
  repairRecords: string[];
}

/** 滑板合作方信息 */
export interface OperationPartnerVO {
  /** 供应商 */
  supplier: string;
  /**
   * 供货日期
   * @format date
   */
  supplierDate: string;
  /** 采购商 */
  purchaser: string;
  /**
   * 采购日期
   * @format date
   */
  purchaserDate: string;
}

/** 受电弓检修记录 */
export interface PantographRepairRecordVO {
  /**
   * 轮数
   * @format int32
   */
  round: number;
  /** 检修级别 */
  level: string;
  /**
   * 修成日期(yyyy-MM-dd HH:mm:ss)
   * @format date-time
   */
  repairTime: string;
}

/** 受电弓 */
export interface PantographVO {
  /** 受电弓：名称 */
  pantographName: string;
  /** 受电弓：物料号 */
  materialNumber: string;
  /** 受电弓：型号 */
  model: string;
  /** 受电弓：序列号 */
  serialNumber: string;
  /** 受电弓：版本号 */
  versionNumber: string;
  /** 受电弓：供货商 */
  supplier: string;
  /**
   * 受电弓：供货日期(yyyy-MM-dd)
   * @format date
   */
  deliveryDate: string;
  /** 检修信息 */
  repairRecords: PantographRepairRecordVO[];
}

export interface ResultOperationDetailVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 运维滑板信息 */
  data?: OperationDetailVO;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 滑板信息 */
export interface SkateboardVO {
  /** 名称 */
  modelName: string;
  /** 物料号 */
  materialNumber: string;
  /** 滑板类型：SINGLE(单滑板)    DOUBLE_FRONT(双滑板-前滑板)    DOUBLE_BACK(双滑板-后滑板)    TRIPLE_FRONT(三滑板-前滑板)    TRIPLE_MIDDLE(三滑板-中滑板)    TRIPLE_BACK(三滑板-后滑板) */
  skateboardType: "SINGLE" | "DOUBLE_FRONT" | "DOUBLE_BACK" | "TRIPLE_FRONT" | "TRIPLE_MIDDLE" | "TRIPLE_BACK";
  /** 序列号 */
  serialNumber: string;
  /** 材质类型: PURE_CARBON(纯碳)    COPPER_BASE_ALLOY(铜基合金)    CARBO(碳碳)    METALLIZING(浸金属) */
  materialType: "PURE_CARBON" | "COPPER_BASE_ALLOY" | "CARBO" | "METALLIZING";
  /** 滑板合作方信息 */
  operationPartner: OperationPartnerVO;
  /** 数据阈值 */
  thresholdValue: ThresholdValue;
}

/** 车辆信息 */
export interface VehicleInformationVO {
  /** 车辆信息：列车号 */
  trainNumber: string;
  /** 车辆信息：运行区间 */
  operatingIntervals: OperatingIntervalDetailVO[];
  /** 车辆信息：车辆号 */
  vehicleNumber: string;
}

/** 运维模型信息 */
export interface OperationModelVO {
  /**
   * 模型id
   * @format int64
   */
  id: number;
  /** 型面名称 */
  modelName: string;
  /** 物料号 */
  materialNumber: string;
  /** 滑板类型：SINGLE(单滑板)    DOUBLE_FRONT(双滑板-前滑板)    DOUBLE_BACK(双滑板-后滑板)    TRIPLE_FRONT(三滑板-前滑板)    TRIPLE_MIDDLE(三滑板-中滑板)    TRIPLE_BACK(三滑板-后滑板) */
  skateboardType: "SINGLE" | "DOUBLE_FRONT" | "DOUBLE_BACK" | "TRIPLE_FRONT" | "TRIPLE_MIDDLE" | "TRIPLE_BACK";
  /** 材质类型: PURE_CARBON(纯碳)    COPPER_BASE_ALLOY(铜基合金)    CARBO(碳碳)    METALLIZING(浸金属) */
  materialType: "PURE_CARBON" | "COPPER_BASE_ALLOY" | "CARBO" | "METALLIZING";
  /** 版本号 */
  versionNo: string;
  /** 供货商 */
  supplier: string;
  /**
   * 供货日期(yyyy-MM-dd)
   * @format date
   */
  supplierDate: string;
  /** 采购方 */
  purchaser: string;
  /**
   * 采购日期(yyyy-MM-dd)
   * @format date
   */
  purchaserDate: string;
  /** 配属信息 */
  modelInfo: string;
  /** 模型文件类型：THREE_DIMENSIONAL(三维（如stp）)    TWO_DIMENSIONAL(二维（如pdf）)    STL(扫描模型（stl）) */
  modelFileType: "THREE_DIMENSIONAL" | "TWO_DIMENSIONAL" | "STL";
}

/** 分页相关数据 */
export interface PageResultOperationModelVO {
  /**
   * 总条数
   * @format int64
   */
  total: number;
  /** 具体数据 */
  list: OperationModelVO[];
}

export interface ResultPageResultOperationModelVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 分页相关数据 */
  data?: PageResultOperationModelVO;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

export interface ResultOperationModelVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 运维模型信息 */
  data?: OperationModelVO;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 组织架构 树结构 */
export interface DepartmentTreeVO {
  /**
   * 对应对象的id
   * @format int64
   */
  value: number;
  /** 展示的label */
  label: string;
  /** 子节点 */
  children?: DepartmentTreeVO[];
}

export interface ResultListDepartmentTreeVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 返回的具体数据 */
  data?: DepartmentTreeVO[];
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

export interface ResultListSingleDepartmentVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 返回的具体数据 */
  data?: SingleDepartmentVO[];
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 单个部门简单信息 */
export interface SingleDepartmentVO {
  /**
   * 部门ID
   * @format int64
   */
  id: number;
  /** 部门名称 */
  name: string;
  /** 部门级别 */
  level: "LEVEL_1" | "LEVEL_2" | "LEVEL_3" | "LEVEL_4" | "LEVEL_5" | "LEVEL_6";
}

/** 组织架构相关信息 */
export interface DepartmentInfoVO {
  /** 公司或集团名称 */
  cliqueName: string;
  /** 国铁单位信息：车辆段 */
  carDepot?: string;
  /** 国铁单位信息：部室 */
  department?: string;
  /** 车辆信息：列车号 */
  trainNumber?: string;
  /** 车辆信息：车辆号 */
  vehicleNumber?: string;
  /** 车辆信息：运行区间 */
  operatingIntervals: OperatingIntervalVO[];
  /** 受电弓 */
  pantograph?: PantographVO;
}

/** 运行区间 */
export interface OperatingIntervalVO {
  /**
   * id
   * @format int64
   */
  id: number;
  /** 起始地 */
  startPlace: string;
  /** 目的地 */
  endPlace: string;
  /** UP(上行)    DOWN(下行) */
  runningDirection: "UP" | "DOWN";
  /**
   * 运行时间：起始时间(yyyy-MM-dd)
   * @format date
   */
  runningStartDate: string;
  /**
   * 运行时间：结束时间(yyyy-MM-dd)
   * @format date
   */
  runningEndDate: string;
  /**
   * 运行里程（km）
   * @format float
   */
  mileage: number;
}

export interface ResultDepartmentInfoVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 组织架构相关信息 */
  data?: DepartmentInfoVO;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 分页相关数据 */
export interface PageResultUrbanRailVO {
  /**
   * 总条数
   * @format int64
   */
  total: number;
  /** 具体数据 */
  list: UrbanRailVO[];
}

export interface ResultPageResultUrbanRailVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 分页相关数据 */
  data?: PageResultUrbanRailVO;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 城轨车辆项目 分页数据 */
export interface UrbanRailVO {
  /**
   * 项目id
   * @format int64
   */
  id: number;
  /** 项目名称 */
  projectName: string;
  /** 公司名称 */
  companyName: string;
  /** 线号 */
  routeNumber: string;
  /** 部室 */
  department: string;
  /** 车辆信息：列车号 */
  trainNumber: string;
  /** 车辆信息：车辆号 */
  vehicleNumber: string;
  /** 受电弓：名称 */
  pantographName: string;
  /**
   * 受电弓，修成日期
   * @format date-time
   */
  repairDate: string;
}

export interface ResultUrbanRailDetailVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 返回的具体数据 */
  data?: UrbanRailDetailVO;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 城轨 单位信息 */
export interface UrbanRailCliqueVO {
  /** 公司名称 */
  companyName: string;
  /** 线号 */
  routeNumber: string;
  /** 部室 */
  department: string;
}

/** 返回的具体数据 */
export interface UrbanRailDetailVO {
  /**
   * 项目id
   * @format int64
   */
  id: number;
  /** 项目名称 */
  projectName: string;
  /** 城轨 单位信息 */
  urbanRailClique: UrbanRailCliqueVO;
  /** 车辆信息 */
  vehicleInformation: VehicleInformationVO;
  /** 受电弓 */
  pantograph: PantographVO;
}

/** 国铁车辆项目 分页数据 */
export interface NationalRailwayVO {
  /**
   * 项目id
   * @format int64
   */
  id: number;
  /** 项目名称 */
  projectName: string;
  /** 单位名称 */
  cliqueName: string;
  /** 车辆段 */
  carDepot: string;
  /** 部室 */
  department: string;
  /** 车辆信息：列车号 */
  trainNumber: string;
  /** 车辆信息：车辆号 */
  vehicleNumber: string;
  /** 受电弓：名称 */
  pantographName: string;
  /**
   * 受电弓，修成日期
   * @format date-time
   */
  repairDate: string;
}

/** 分页相关数据 */
export interface PageResultNationalRailwayVO {
  /**
   * 总条数
   * @format int64
   */
  total: number;
  /** 具体数据 */
  list: NationalRailwayVO[];
}

export interface ResultPageResultNationalRailwayVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 分页相关数据 */
  data?: PageResultNationalRailwayVO;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 国铁单位信息 */
export interface NationalRailwayCliqueVO {
  /** 国铁单位信息：集团名称 */
  cliqueName: string;
  /** 国铁单位信息：车辆段 */
  carDepot: string;
  /** 国铁单位信息：部室 */
  department: string;
}

/** 国铁车辆项目 详细信息 */
export interface NationalRailwayDetailVO {
  /**
   * 项目id
   * @format int64
   */
  id: number;
  /** 项目名称 */
  projectName: string;
  /** 国铁单位信息 */
  nationalRailwayClique: NationalRailwayCliqueVO;
  /** 车辆信息 */
  vehicleInformation: VehicleInformationVO;
  /** 受电弓 */
  pantograph: PantographVO;
}

export interface ResultNationalRailwayDetailVO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 国铁车辆项目 详细信息 */
  data?: NationalRailwayDetailVO;
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

export interface ResultListAuthorityEnum {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 返回的具体数据 */
  data?: (" ADMIN:管理员" | " OPERATOR:操作员" | " SUPPLIER:供货方")[];
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}

/** 滑板模型 */
export interface OperationModelBO {
  /**
   * 模型id
   * @format int64
   */
  id: number;
  /**
   * 运行里程
   * @format float
   */
  mileage: number;
}

export interface ResultListOperationModelBO {
  /**
   * 编码，200代表成功请求，编码符合一般规范
   * @format int32
   */
  code: number;
  /** 返回的消息，默认success */
  message: string;
  /** 返回的具体数据 */
  data?: OperationModelBO[];
  /** 错误的具体信息 RFC 7807格式 */
  error?: ProblemDetail;
}
