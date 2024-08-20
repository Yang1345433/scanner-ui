<script setup lang="ts">
import Body from "@/layouts/utils/Body.vue";
import PageHead from "@/layouts/utils/PageHead.vue";
</script>

<template>
  <el-container>
    <el-header style="padding-left: 0; padding-right: 0;height: 100%; background-color: black"><PageHead/></el-header>
    <el-container>
      <el-aside width="15%">
        <Body/>
      </el-aside>
      <el-main>
        <transition mode="out-in">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>

</style>