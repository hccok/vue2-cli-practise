<template>
  <div>
    <el-card class="login-form-layout">
      <el-form
        autocomplete="on"
        :model="loginForm"
        ref="loginForm"
        label-position="left"
      >
        <div style="text-align: center">
          <i
            icon-class="login-mall"
            style="width: 56px; height: 56px; color: #409eff"
          ></i>
        </div>
        <h2 class="login-title color-main">登录页面</h2>
        <el-form-item prop="username">
          <el-input
            name="username"
            type="text"
            v-model="loginForm.username"
            autocomplete="on"
            placeholder="请输入用户名"
          >
            <span slot="prefix">
              <i class="el-icon-user-solid"></i>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            :type="pwdType"
            @keyup.enter.native="handleLogin"
            v-model="loginForm.password"
            autocomplete="on"
            placeholder="请输入密码"
          >
            <span slot="prefix">
              <i class="el-icon-s-goods"></i>
            </span>
            <span slot="suffix" @click="showPwd">
              <i class="el-icon-view"></i>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px">
          <el-button
            style="width: 40%"
            type="default"
            :loading="loading"
            @click="handleRegister"
            >注册</el-button
          >
          <el-button
            style="width: 40%"
            type="primary"
            :loading="loading"
            @click="handleLogin"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios';
import md5 from 'js-md5';
export default {
  name: "HelloWorld",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loading: false,
      pwdType: "password",
    };
  },
  props: {},
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
      let a = md5(this.loginForm.password);
      console.log(a);
      axios.post('http://localhost:3000/api/login',{
        data:{
          username:this.loginForm.username,
          password:a,
        }
      }).then((res)=>{
        console.log(res);
      })
    },
    handleRegister() {
      axios.post('http://localhost:3000/api/register',{
        data:{
          username:this.loginForm.username,
          password:this.loginForm.password,
        }
      }).then(res=>console.log(res))
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
}

.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>
