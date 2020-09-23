<template>
  <div class="login" v-loading="loading">
    <div class="user">
      <div class="userName">
        <el-input v-model="userName" placeholder="请输入账号" size="mini"></el-input>
      </div>
      <div class="userPass">
        <el-input v-model="userPass" placeholder="请输入密码" show-password size="mini"></el-input>
      </div>
      <div class="login-btn">
        <el-button type="primary" size="medium" round @click="doLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: function() {
    return {
      userName: "renshufan",
      userPass: "123456",
      loading: false
    };
  },
  methods: {
    // 登录
    doLogin() {
      this.$router.push("/banana1");
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("../assets/image/login.png") no-repeat;
  background-size: cover;
}
.user {
  width: 250px;
  height: 100px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.userPass,
.userName,
.login-btn {
  line-height: 50px;
}
</style>
