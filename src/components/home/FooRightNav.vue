<script>
  export default {
    name:"FooRightNav",
  }
</script>

<template>
  <div class="FRN_wrap">
    <div class="FRN_item_wrap">
      <router-link to="Detail" class="FRN_item_text">天猫</router-link>
    </div>
    <hr class="FRN_item_line">
    <div class="FRN_item_wrap">
      <router-link to="Detail" class="FRN_item_text">聚划算</router-link>
    </div>
    <hr class="FRN_item_line">
    <div class="FRN_item_wrap">
          <router-link to="Detail" class="FRN_item_text">天猫超市</router-link>
    </div>
    <hr class="FRN_item_line">
    <div class="FRN_item_wrap">
          <router-link to="Detail" class="FRN_item_text">司法拍卖</router-link>
    </div>
    <hr class="FRN_item_line">
    <div class="FRN_item_wrap">
          <router-link to="Detail" class="FRN_item_text">飞猪旅行</router-link>
    </div>
    <hr class="FRN_item_line">
    <div class="FRN_item_wrap">
          <router-link to="Detail" class="FRN_item_text">天天特卖</router-link>
    </div>
    <hr class="FRN_item_line">
    <div class="FRN_item_wrap">
          <router-link to="Detail" class="FRN_item_text">极有家</router-link>
    </div>
    <hr class="FRN_item_line">
    <div class="FRN_item_wrap">
          <router-link to="Detail" class="FRN_item_text">淘宝直播</router-link>
    </div>
  </div>
</template>

<style scoped>
  .FRN_wrap{
    background-color: #f7f9fa;
    display: flex;
    position: absolute;
    top: 25px;
    right: 20px;
    border-radius: 15px;
    width: 820px;
    height: 50px;
  }
  .FRN_item_wrap{
    width: 85px;
    height: 30px;
    margin-top: 10px;
    margin-left: 10px;
  }
  .FRN_item_line{
    width: 2.5px;
    height: 20px;
    background-color: #e2e0e0;
    margin-top: 15px;
    margin-left: 15px;
    float: left;
  }
  .FRN_item_text{
    font-size: 13px;
    position: absolute;
    top: 13px;
    margin-left: 15px;
    color: #6c6c6c;
  }
  .FRN_item_text:hover{
    color: #f22e00;
    background-color: #f7f9fa;
  }
</style>