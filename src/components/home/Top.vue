<script>
  export default {
    name:"Top",
    data(){
      return{
        left_items:["中国大陆","亲，请登录","免费注册","手机逛淘宝","网页无障碍"],
        right_items:["我的淘宝", "购物车", "收藏夹", "商品分类","免费开店"]
      };
    },
  }
</script>

<template>
  <div id="Top" class="top_nav">
    <div class="top_left_wrap">
      <router-link to="Detail" class="top_left" v-for="(left_item,index) in left_items" :key="index">{{left_item}}</router-link>
    </div>
    <div class="top_right_wrap">
      <router-link to="Detail" class="top_right" v-for="(right_item, index) in right_items" :key="index">{{right_item}}</router-link>
      <hr class="FRN_item_line">
      <router-link to="Detail" class="top_right">千牛卖家中心</router-link>
      <router-link to="Detail" class="top_right">联系客服</router-link>
    </div>
  </div>
</template>

<style scoped>
  .top_nav {
    height: 40px;
    background-color: #f5f5f5;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  .top_left_wrap{
    width: 450px;
    display: flex;
    position: relative;
    left: 80px;
  }
  .top_left{
    position: relative;
    top: 6px;
    padding-left: 25px;
    color: #6c6c6c;
    font-size: 13px;
  }
  .top_left:hover{
    color:#f22e00;
  }
  .top_right_wrap{
    width: 600px;
    height: 40px;
    display: flex;
    position: absolute;
    right: 80px;
  }
  .top_right{
    position: relative;
    top: 7px;
    padding-left: 25px;
    color: #6c6c6c;
    font-size: 13px;
  }
  .top_right:hover{
    color:#f22e00;

  }
  .FRN_item_line{
    width: 2.5px;
    height: 20px;
    background-color: #e2e0e0;
    margin-top: 10px;
    margin-left: 25px;
    float: left;
  }
</style>