<script setup lang="ts">
import {Crop, Document, Expand, Guide, OfficeBuilding, School, Setting} from "@element-plus/icons-vue";
import routers from "@/routers";

const clickPushRouter = (router: string) => {
  routers.push(router)
}

</script>

<template>
  <el-menu
      default-active="1"
      :collapse="false"
      background-color="white"
      text-color="black"
      active-text-color="gray"
  >
    <el-menu-item index="1" @click="clickPushRouter('/index')">
      <el-icon><Expand /></el-icon>
      首页
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><document /></el-icon>
      滑板概览
    </el-menu-item>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><Guide /></el-icon>
        项目管理
      </template>
      <el-menu-item index="3-1" @click="clickPushRouter('/operationCheck')">
        <el-icon><OfficeBuilding /></el-icon>
        滑板运维检验
      </el-menu-item>
      <el-menu-item index="3-2">
        <el-icon><School /></el-icon>
        滑板质量检验
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4">
      <el-icon><Crop /></el-icon>
      模型管理
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><setting /></el-icon>
      系统配置
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.icon-size {
  font-size: 100px;
}
</style>