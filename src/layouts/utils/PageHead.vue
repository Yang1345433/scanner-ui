<script setup lang="ts">
import {ElemeFilled} from "@element-plus/icons-vue";
import {apis} from "@/api/apis.ts";
import {ElMessage} from "element-plus";
import routers from "@/routers";
import {userStoreHook} from "@/stores/modules/user.ts";

const logout = async () => {
  const res = await apis.logout.logout()

  if (res.data.code === 0) {
    ElMessage.success("退出成功")
    userStoreHook().removeToken()
    await routers.push('/')
  }
  else {
    ElMessage.success("退出成功")
    await routers.push('/')
  }
}
</script>

<template>
  <el-container style="display: flex;align-items: center; font-size: 32px;margin-left: 32px;margin-top: 12px;margin-bottom: 12px;color: white">
    <el-container style="display: flex; align-items: center">
      <el-icon style="font-size: 56px; margin-right: 32px;"><ElemeFilled /></el-icon>
      受电弓管理系统
    </el-container>
    <el-button plain style="margin-right: 5%;" @click="logout">退出登录</el-button>
  </el-container>
</template>

<style scoped>

</style>