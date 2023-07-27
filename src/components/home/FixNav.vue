<script>
  export default {
    name:"FixNav",
  }
</script>

<template>
  <div id="FixNav" class="FixNav">
    <router-link to="Detail" class="img_wrap">
      <img alt="消息" src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/respond.png" class="img">
      <p class="text">消息</p>
    </router-link>
    <router-link to="Detail" class="img_wrap">
      <img alt="官方客服" src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/calling%20robort.png" class="img">
      <p class="text">官方客服</p>
    </router-link>
    <router-link to="Detail" class="img_wrap">
      <img alt="反馈" src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/edit.png" class="img">
      <p class="text">反馈</p>
    </router-link>
    <router-link to="Detail" class="img_wrap">
      <img alt="举报" src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/prompt.png" class="img">
      <p class="text">举报</p>
    </router-link>
  </div>
</template>

<style scoped>
  .FixNav{
    background-color: #f7f9fa;
    width:80px;
    height:330px;
    position: fixed;
    top: 220px;
    right: 0;
    bottom: 250px;
    border-radius: 25px 0 0 25px;
  }
  .img{
    position: relative;
    top: 5px;
    left: 17px;
    width: 50px;
    height: 50px;
  }
  .img_wrap:hover{
    background-color: #f7f9fa;
  }
  .text{
    text-align:center;
    color: #181818;
  }
</style>