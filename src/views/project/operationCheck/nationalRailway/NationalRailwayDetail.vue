<!--suppress VueUnrecognizedSlot -->
<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import {NationalRailwayDetailVO} from "@/api/data-contracts.ts";
import {ArrowLeftBold} from "@element-plus/icons-vue";
import routers from "@/routers";
import {useRoute} from "vue-router";
import {apis} from "@/api/apis.ts";
import NationalRailwayAnalyze from "@/views/project/operationCheck/nationalRailway/NationalRailwayAnalyze.vue";

const route = useRoute()

const info = ref<NationalRailwayDetailVO>()
const pushRouter = (router: string) => {
  routers.push(router)
}

const getInfo = async () => {
  const res = await apis.nationalRailway.nationalRailwayDetail(Number(route.query.projectId))
  if (res.data.code === 0) {
    info.value = res.data.data
  }
  // const data = await loadJsonData()
  //
  // console.log(data)
}

onBeforeMount(getInfo)

// interface Point {
//   x: number;
//   y: number;
//   z: number;
//   type: number; // 假设 type 是一种可以映射到颜色的字符串
// }
//
// const jsonUrl = 'src/assets/pointData/points.json'; // 替换为您的 JSON 文件路径
//
// async function loadJsonData() {
//   const response = await fetch(jsonUrl);
//   console.log(response)
//   const data: Point[] = await response.json();
//   return data;
// }

const projectInfoType = ref("nationalRailwayDetail")
</script>

<template>
  <el-container>
    <el-header style="display: flex;align-items: center;height: 50%;padding-left: 0">
      <el-icon style="padding-right: 15px;font-size: 24px;cursor: pointer;" @click="pushRouter('/operationCheck/page')"><ArrowLeftBold /></el-icon>
      <el-text class="mx-1" size="large" style="font-size: 24px;padding-right: 20px;">详情</el-text>
      <el-radio-group v-model="projectInfoType" size="large" fill="gray">
        <el-radio-button label="项目信息" value="nationalRailwayDetail"/>
        <el-radio-button label="质量检验分析" value="nationalRailwayAnalyze"/>
        <el-radio-button label="查看报表" value="查看报表"/>
        <el-radio-button label="维修结果" value="维修结果"/>
      </el-radio-group>
    </el-header>
    <el-main v-if="projectInfoType === 'nationalRailwayDetail'">
      <el-text size="large">项目名称：{{info?.projectName}}</el-text>
      <el-collapse style="margin-top: 20px">
        <el-collapse-item name="1" >
          <template #title>
            <el-text style="font-size: 16px">单位信息</el-text>
          </template>
          <el-descriptions
              direction="vertical"
              :column="3"
              :size="'large'"
              border
          >
            <el-descriptions-item label="集团名称" :align="'center'">{{info?.nationalRailwayClique.cliqueName}}</el-descriptions-item>
            <el-descriptions-item label="车辆段" :align="'center'">{{info?.nationalRailwayClique.carDepot}}</el-descriptions-item>
            <el-descriptions-item label="部室" :align="'center'">{{info?.nationalRailwayClique.department}}</el-descriptions-item>
          </el-descriptions>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <el-text style="font-size: 16px">车辆信息</el-text>
          </template>
          <el-descriptions
              direction="vertical"
              :column="2"
              :size="'large'"
              border
          >
            <el-descriptions-item label="列车号">{{info?.vehicleInformation.trainNumber}}</el-descriptions-item>
            <el-descriptions-item label="车辆号">{{info?.vehicleInformation.vehicleNumber}}</el-descriptions-item>
            <el-descriptions-item label="运行区间">
              <el-table :data="info?.vehicleInformation.operatingIntervals">
                <el-table-column prop="startPlace" label="起始地"/>
                <el-table-column prop="endPlace" label="目的地"/>
                <el-table-column prop="runningDirection" label="车辆运行方向"/>
                <el-table-column prop="mileage" label="运行里程"/>
              </el-table>
            </el-descriptions-item>
          </el-descriptions>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <el-text style="font-size: 16px">受电弓信息</el-text>
          </template>
          <el-descriptions
              direction="vertical"
              :column="4"
              :size="'large'"
              border
          >
            <el-descriptions-item label="名称">{{info?.pantograph.pantographName}}</el-descriptions-item>
            <el-descriptions-item label="物料号">{{info?.pantograph.materialNumber}}</el-descriptions-item>
            <el-descriptions-item label="型号">{{info?.pantograph.model}}</el-descriptions-item>
            <el-descriptions-item label="序列号">{{info?.pantograph.serialNumber}}</el-descriptions-item>
          </el-descriptions>
          <el-descriptions
              direction="vertical"
              :column="3"
              :size="'large'"
              border
          >
            <el-descriptions-item label="版本号">{{info?.pantograph.versionNumber}}</el-descriptions-item>
            <el-descriptions-item label="供货商">{{info?.pantograph.supplier}}</el-descriptions-item>
            <el-descriptions-item label="供货日期">{{info?.pantograph.deliveryDate}}</el-descriptions-item>
          </el-descriptions>
          <el-descriptions
              direction="vertical"
              :column="2"
              :size="'large'"
              border
          >
            <el-descriptions-item label="修成级别">{{info?.pantograph.repairLevel}}</el-descriptions-item>
            <el-descriptions-item label="修成日期">{{info?.pantograph.repairDate}}</el-descriptions-item>
          </el-descriptions>
        </el-collapse-item>
      </el-collapse>
    </el-main>
    <NationalRailwayAnalyze v-if="projectInfoType === 'nationalRailwayAnalyze'"/>
  </el-container>
</template>

<style scoped>
</style>