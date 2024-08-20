<script setup lang="ts">
import {ArrowLeftBold} from "@element-plus/icons-vue";
import routers from "@/routers";
import {ref} from "vue";
import {NationalRailwayDTO, OperatingIntervalDTO} from "@/api/data-contracts.ts";
import {apis} from "@/api/apis.ts";
import {ElMessage} from "element-plus";

const formData = ref<NationalRailwayDTO>({
  nationalRailwayClique: {},
  vehicleInformation: {
    operatingIntervals: [{}]
  },
  pantograph: {}
} as NationalRailwayDTO)

const addListItem = () => {
  console.log(formData)
  formData.value?.vehicleInformation.operatingIntervals.push({} as OperatingIntervalDTO)
}

const deleteListItem = (index: number) => {
  formData.value.vehicleInformation.operatingIntervals.splice(index, 1)
}

const commitFormData = async () => {
  const res = await apis.nationalRailway.nationalRailwayAdd(formData.value)
  if (res.data.code === 0) {
    await routers.push('page')
    ElMessage.success("保存成功")
  }
  else {
    ElMessage.error(res.data.message)
  }
}

</script>

<template>
  <el-container>
    <el-header style="display: flex;align-items: center;height: 50%;padding-left: 0">
      <el-icon style="padding-right: 15px;font-size: 24px;cursor: pointer;" @click="routers.push('page')"><ArrowLeftBold /></el-icon>
      <el-text class="mx-1" size="large" style="font-size: 24px">新增</el-text>
      <el-button type="info" plain style="margin-left: auto" @click="commitFormData">保存</el-button>
    </el-header>
    <el-main>
      <el-card>
        <el-descriptions :column="2" :size="'large'" border title="项目及单位信息:" style="padding-bottom: 20px">
          <el-descriptions-item label="项目名称：" label-align="center" >
            <el-input v-model="formData.projectName"/>
          </el-descriptions-item>
          <el-descriptions-item label="集团名称:" label-align="center">
            <el-input v-model="formData.nationalRailwayClique.cliqueName"/>
          </el-descriptions-item>
          <el-descriptions-item label="车辆段:" label-align="center">
            <el-input v-model="formData.nationalRailwayClique.carDepot"/>
          </el-descriptions-item>
          <el-descriptions-item label="部室:" label-align="center">
            <el-input v-model="formData.nationalRailwayClique.department"/>
          </el-descriptions-item>
          <el-descriptions-item label="列车号:" label-align="center">
            <el-input v-model="formData.vehicleInformation.trainNumber"/>
          </el-descriptions-item>
        </el-descriptions>
        <div style="padding-bottom: 20px;font-size: 16px;color: #303133;font-weight: bold;">运行区间:</div>
        <el-table :data="formData?.vehicleInformation.operatingIntervals" border>
          <el-table-column label="起始地点:">
            <template #default="scope">
              <el-input v-model="scope['row']['startPlace']"/>
            </template>
          </el-table-column>
          <el-table-column label="目的地点:">
            <template #default="scope">
              <el-input v-model="scope['row']['endPlace']"/>
            </template>
          </el-table-column>
          <el-table-column label="车辆运行方向:">
            <template #default="scope">
              <el-select v-model="scope['row']['runningDirection']" placeholder="选择">
                <el-option label="上行" value=" UP:上行 "/>
                <el-option label="下行" value=" DOWN:下行 "/>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="运行里程:">
            <template #default="scope">
              <el-input type="number" v-model="scope['row']['mileage']"/>
            </template>
          </el-table-column>
          <el-table-column label="操作:" fixed="right" width="100">
            <template #default="scope">
              <el-button
                  link
                  type="primary"
                  size="large"
                  @click.prevent="deleteListItem(scope['index'])"
              >
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button class="mt-4" style="width: 100%;margin-bottom: 20px" @click="addListItem">添加数据</el-button>
        <el-descriptions :column="2" size="large" border title="受电弓信息:">
          <el-descriptions-item label="受电弓名称:" label-align="center">
            <el-input v-model="formData.pantograph.pantographName"/>
          </el-descriptions-item>
          <el-descriptions-item label="物料号:" label-align="center">
            <el-input v-model="formData.pantograph.materialNumber"/>
          </el-descriptions-item>
          <el-descriptions-item label="型号:" label-align="center">
            <el-input v-model="formData.pantograph.model"/>
          </el-descriptions-item>
          <el-descriptions-item label="序列号:" label-align="center">
            <el-input v-model="formData.pantograph.serialNumber"/>
          </el-descriptions-item>
          <el-descriptions-item label="版本号:" label-align="center">
            <el-input v-model="formData.pantograph.versionNumber"/>
          </el-descriptions-item>
          <el-descriptions-item label="供货商:" label-align="center">
            <el-input v-model="formData.pantograph.supplier"/>
          </el-descriptions-item>
          <el-descriptions-item label="供货日期:" label-align="center">
            <el-date-picker v-model="formData.pantograph.deliveryDate" type="date" placeholder="选择日期" :size="'large'"/>
          </el-descriptions-item>
          <el-descriptions-item label="修成级别:" label-align="center">
            <el-input v-model="formData.pantograph.repairLevel"/>
          </el-descriptions-item>
          <el-descriptions-item label="修成日期:" label-align="center">
            <el-date-picker v-model="formData.pantograph.repairDate" type="date" placeholder="选择日期" :size="'large'"/>
          </el-descriptions-item>
        </el-descriptions>
      </el-card>
    </el-main>
  </el-container>
</template>

<style scoped>

</style>