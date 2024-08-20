<script lang="ts" setup>
import {computed} from "vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
const locale = computed(() => zhCn)
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view/>
  </el-config-provider>
</template>
