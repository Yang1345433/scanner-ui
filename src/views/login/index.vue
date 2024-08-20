<script setup lang="ts">
import {ref} from "vue";

interface Student {
  studentNo: string,
  name: string,
  sex: string,
  score: number
}

const data = ref<Student[]>([
  {
    studentNo: "1001",
    name: "张三",
    sex: "男",
    score: 100
  },
  {
    studentNo: "1002",
    name: "李四",
    sex: "女",
    score: 99
  }
])

const getData = () => {
  axios.
}
</script>

<template>
  <el-card>
    <template #header>
      <el-button type="primary">查询</el-button>
    </template>
    <el-table :data="data">
      <el-table-column prop="studentNo" label="学号" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="sex" label="性别" />
      <el-table-column prop="score" label="分数" />
    </el-table>
  </el-card>
</template>