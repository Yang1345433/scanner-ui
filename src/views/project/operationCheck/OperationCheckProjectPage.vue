<script setup lang="ts">

import {ref} from "vue";
import {ProjectType} from "@/enums/project/ProjectType.ts";
import NationalRailway from "@/views/project/operationCheck/nationalRailway/NationalRailwayPage.vue";
import UrbanRail from "@/views/project/operationCheck/urbanRail/UrbanRailPage.vue";

const projectType = ref(ProjectType.NATIONAL_RAILWAY)

</script>

<template>
  <el-container>
    <el-header style="padding-left: 0">
      <el-radio-group v-model="projectType" size="large" fill="gray">
        <el-radio-button label="国铁车辆段检验" :value="ProjectType.NATIONAL_RAILWAY"/>
        <el-radio-button label="城轨车检验" :value="ProjectType.URBAN_RAIL"/>
      </el-radio-group>
    </el-header>
    <el-main style="padding: 0">
      <NationalRailway v-if="projectType === ProjectType.NATIONAL_RAILWAY"/>
      <UrbanRail v-if="projectType === ProjectType.URBAN_RAIL"/>
    </el-main>
  </el-container>
</template>

<style scoped>

</style>