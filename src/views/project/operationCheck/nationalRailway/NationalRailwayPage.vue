<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import {NationalRailwayVO} from "@/api/data-contracts.ts";
import {apis} from "@/api/apis.ts";
import routers from "@/routers";

interface QueryParams {
  page: number
  pageSize: number
  projectName?: string
  detectionStartDate?: string
  detectionEndDate?: string
}

const queryParams = ref<QueryParams>({
  page: 1,
  pageSize: 10,
  projectName: undefined,
  detectionStartDate: undefined,
  detectionEndDate: undefined
})

const tableData = ref<NationalRailwayVO[]>([])
const tableDataTotal = ref(0)

const getTableData = async () => {
  const res = await apis.nationalRailway.nationalRailwayPage(queryParams.value)
  if (res.data.code == 200) {
    tableData.value = res.data.data?.list === undefined ? [] : res.data.data.list
    tableDataTotal.value = res.data.data?.total === undefined ? 0 : res.data.data.total
  }
}

const toDetail = (row: NationalRailwayVO) => {
  routers.push({
    path: '/operationCheck/nationalRailwayDetail',
    query: {
      projectId: row.id
    }
  })
}

onBeforeMount(getTableData)

</script>

<template>
  <el-container>
    <el-header style="padding: 0">
      <el-form :inline="true" :model="queryParams" class="demo-form-inline">
        <el-form-item label="项目名称:">
          <el-input v-model="queryParams.projectName" placeholder="请输入项目名称" style="width: 100%">
            <template #prefix>
              <el-icon class="el-input__icon"><search /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="检验起始时间:">
          <el-date-picker v-model="queryParams.detectionStartDate" type="date" placeholder="选择日期" clearable/>
        </el-form-item>
        <el-form-item label="检验终止时间:">
          <el-date-picker v-model="queryParams.detectionEndDate" type="date" placeholder="选择日期" clearable/>
        </el-form-item>
        <el-form-item>
          <el-button type="info" plain @click="getTableData">搜索</el-button>
          <el-button type="primary" plain @click="routers.push('nationalRailwayAdd')">新增</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main style="padding: 0">
      <el-table :data="tableData" style="width: 100%" :border="true" :size="'default'" :highlight-current-row="true">
        <el-table-column prop="projectName" label="项目名称" width="150" />
        <el-table-column prop="cliqueName" label="单位名称" width="150" />
        <el-table-column prop="carDepot" label="车辆段" width="150" />
        <el-table-column prop="department" label="部室" width="150" />
        <el-table-column prop="trainNumber" label="列车号" width="150" />
        <el-table-column prop="vehicleNumber" label="车辆号" width="150" />
        <el-table-column prop="pantographName" label="受电弓" width="150"/>
        <el-table-column prop="repairDate" label="修成日期" width="200"/>
        <el-table-column fixed="right" label="操作" width="150">
          <template #default="scope">
            <el-button link type="primary" size="default" @click="toDetail(scope['row'])">详细</el-button>
            <el-button link type="primary" size="default">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          style="margin-top: 20px"
          v-model:current-page="queryParams.page"
          v-model:page-size="queryParams.pageSize"
          :page-sizes="[10, 20, 30, 50]"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableDataTotal"
          @change="getTableData"
      />
    </el-main>
  </el-container>
</template>

<style scoped>

</style>