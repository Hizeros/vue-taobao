<script>
  export default {
    name:"FooInput",
  }
</script>

<template>
  <div id="FooInput" class="FooInput">
    <div class="FooInput_item">
      <router-link to="Login">
        <img alt="" src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/getAvatar.jpg" class="img">
      </router-link>
      <br>
      <router-link to="Login">
        <el-text class="text">Hi!你好</el-text>
      </router-link>
      <br>
      <router-link to="Login">
        <el-button type="warning" round class="btn1">登录</el-button>
      </router-link>
      <router-link to="Login">
        <el-button type="warning" round class="btn">注册</el-button>
      </router-link>
      <router-link to="Login">
        <el-button round class="btn" >开店</el-button>
      </router-link>
    </div>

  </div>
</template>

<style scoped>
  .FooInput{
    width: 300px;
    height: 280px;
    position: absolute;
    top: 90px;
    right: 20px;
  }
  .FooInput_item{
    position: absolute;
    top: 20px;
    left: 80px;
  }
  .img {
    border-radius: 100%;
    margin-left: 50px;
  }
  .text {
    margin-left: 55px;
  }
  .btn1 {
    margin-top: 50px;
  }
  .btn {
    margin-left: 10px;
    margin-top: 50px;
  }
</style>