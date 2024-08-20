<template>
  <el-form
      ref="ruleFormRef"
      style="width: 25%;"
      :model="form"
      status-icon
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
      label-position="left"
      size="large"
  >
    <h1 style="font-size: 32px; display: flex; align-items: center;margin-bottom: 64px"><el-icon style="margin-right: 5%;font-size: 48px"><ElemeFilled /></el-icon>账号登录</h1>
    <el-form-item label="" prop="username" size="large">
      <el-input v-model="form.username" placeholder="用户名" prefix-icon="UserFilled" />
    </el-form-item>
    <el-form-item label="" prop="password">
      <el-input v-model="form.password" type="password" placeholder="密码" prefix-icon="Lock"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm" style="width: 100%;color: white;margin-top: 32px" color="gray">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {apis} from "@/api/apis.ts";
import router from "@/routers";
import {userStoreHook} from "@/stores/modules/user.ts";
import {ElemeFilled} from "@element-plus/icons-vue";

interface LoginFormModel {
  username: string
  password: string
}

// 表单数据模型
const form = reactive<LoginFormModel>({
  username: 'admin',
  password: '123456'
});

// 表单验证规则
const rules = {
  username: { required: true, message: '请输入用户名', trigger: 'blur' },
  password: { required: true, message: '请输入密码', trigger: 'blur' }
};

// 提交表单
const submitForm = async () => {
  // 这里仅为示例，实际应替换为调用后端接口进行登录验证
  const res = await apis.login.loginWithUsernameAndPassword({
    account: form.username,
    password: form.password
  })

  if (res.data.code == 200) {
    res.data.data !== undefined? userStoreHook().setToken(res.data.data) : alert("login form error: 登录接口返回token为空")
    await router.push('/index')
  }
};

</script>

<style scoped>
</style>
