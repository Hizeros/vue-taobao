<script>
  export default {
    name:"FooLeftNav",
    data(){
      return{
        f_items:["女装","/","内衣","/","奢品"],
        s_items:["女鞋","/","男鞋","/","箱包"],
        t_items:["美妆","/","饰品","/","洗护"],
        fo_items:["男装","/","运动","/","百货"],
        fi_items:["手机","/","数码","/","企业礼品"],
        si_items:["家装","/","电器","/","车品"],
        se_items:["食品","/","生鲜","/","母婴"],
        e_items:["医药","/","保健","/","进口"],
      }
    }
  }
</script>

<template>
  <div class="FLN_wrap">
    <h2 class="FLN_sum">分类</h2>
    <div class="FLN_item_wrap">
      <div class="FLN_item">
        <img alt="女装" src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/%E5%A5%B3%E8%A3%85.png" class="FLN_item_img">
        <div class="FLN_item_text" v-for="(f_item,index) in f_items" :key="index">{{f_item}}</div>
      </div>
      <div class="FLN_item">
        <img alt="箱包" src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/%E7%AE%B1%E5%8C%85.png" class="FLN_item_img">
        <div class="FLN_item_text" v-for="(s_item,index) in s_items" :key="index">{{s_item}}</div>
      </div>
      <div class="FLN_item">
        <img alt="美妆" src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/%E5%86%85%E8%A1%A3.png" class="FLN_item_img">
        <div class="FLN_item_text" v-for="(t_item,index) in t_items" :key="index">{{t_item}}</div>
      </div>
      <div class="FLN_item">
        <img alt="男装" src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/%E7%94%B7%E8%A3%85.png" class="FLN_item_img">
        <div class="FLN_item_text" v-for="(fo_item,index) in fo_items" :key="index">{{fo_item}}</div>
      </div>
      <div class="FLN_item">
        <img alt="数码" src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/%E7%9B%B8%E6%9C%BA1.png" class="FLN_item_img">
        <div class="FLN_item_text" v-for="(fi_item,index) in fi_items" :key="index">{{fi_item}}</div>
      </div>
      <div class="FLN_item">
        <img alt="家居" src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/%E5%B1%85%E5%AE%B6.png" class="FLN_item_img">
        <div class="FLN_item_text" v-for="(si_item,index) in si_items" :key="index">{{si_item}}</div>
      </div>
      <div class="FLN_item">
        <img alt="母婴" src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/%E6%AF%8D%E5%A9%B4.png" class="FLN_item_img">
        <div class="FLN_item_text" v-for="(se_item,index) in se_items" :key="index">{{se_item}}</div>
      </div>
      <div class="FLN_item">
        <img alt="进口" src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/%E7%89%B9%E6%9D%83%E4%B8%93%E5%B1%9E.png" class="FLN_item_img">
        <div class="FLN_item_text" v-for="(e_item,index) in e_items" :key="index">{{e_item}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .FLN_wrap{
    background-color: #f7f9fa;
    border-radius: 15px;
    position: relative;
    top: 25px;
    left: 10px;
    width: 240px;
    height: 350px;
  }
  .FLN_sum{
    font-size: 18px;
    font-weight: 530;
    position: relative;
    top: 8px;
    left: 12px;
  }
  .FLN_item_wrap{
    position: absolute;
    top: 33px;
    left: 12px;
    width: 220px;
    height: 310px;
  }
  .FLN_item{
    margin-top: 12px;
    display: flex;
    width: 220px;
    height: 25px;
  }
  .FLN_item_img{
    width: 20px;
    height: 20px;
  }
  .FLN_item_text{
    margin-left: 10px;
    color: #666666;
    font-size: 13px;
  }
  .FLN_item_text:hover{
    background-color: #f7f9fa;
    color:#f22e00;
  }
</style>