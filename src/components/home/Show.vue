<script>
  export default {
    name:"Show",
  }
</script>

<template>
  <div id="Show" class="show">
    <h2>猜你喜欢</h2>
    <br />
    <div class="all">
      <router-link to="Detail" >
        <div class="wrap">
          <img src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/20230727171425.png" alt="" class="img">
          <div>
            <div class="info-wrapper">
              <div class="title">
                豆浆过滤神器
              </div>
              <div class="tag-list">
                <div class="tag-item">
                  收藏上千
                </div>
              </div>
            </div>
            <div class="price-wrapper">
          <span class="price-value">
            <em>￥</em>
            999
          </span>
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="Detail" >
        <div class="wrap">
          <img src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/20230727171425.png" alt="" class="img">
          <div>
            <div class="info-wrapper">
              <div class="title">
                豆浆过滤神器
              </div>
              <div class="tag-list">
                <div class="tag-item">
                  收藏上千
                </div>
              </div>
            </div>
            <div class="price-wrapper">
          <span class="price-value">
            <em>￥</em>
            999
          </span>
            </div>
          </div>
        </div>
      </router-link>
      <router-link to="Detail" >
        <div class="wrap">
          <img src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/20230727171425.png" alt="" class="img">
          <div>
            <div class="info-wrapper">
              <div class="title">
                豆浆过滤神器
              </div>
              <div class="tag-list">
                <div class="tag-item">
                  收藏上千
                </div>
              </div>
            </div>
            <div class="price-wrapper">
          <span class="price-value">
            <em>￥</em>
            999
          </span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .show{
    margin-top: 50px;
    margin-left: 15px;
  }
  .all {
    display: flex;
  }
  .wrap {
    border-radius: 4px;
    border: 2px solid #f7f9fa;
    background-color: #f7f9fa;
    height: 150px;
    width: 330px;
    display: flex;
    margin-left: 20px;
  }
 .img {
   border-radius: 10px;
   height: 140px;
   width: 140px;
   margin-top: 5px;
   margin-left: 5px;
 }
  .info-wrapper {
    position: relative;
    height: 116px;
    margin-left: 30px;
    overflow: hidden;
  }

  .info-wrapper .title {
    display: inline-block;
    max-height: 46px;
    margin: 6px 0 2px 0;
    overflow: hidden;
    color: #333;
    font-size: 16px;
    line-height: 23px;
  }
  .info-wrapper .tag-list {
    height: 20px;
    overflow: hidden;
  }
  .info-wrapper .tag-list .tag-item {
    display: inline-block;
    height: 18px;
    margin-right: 6px;
    padding: 0 4px;
    color: #ff5000;
    font-size: 12px;
    line-height: 18px;
    vertical-align: top;
    border: 1px solid #ff5000;
    background: #FFFFFF;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }
  .price-wrapper {
    margin-left: 30px;
    color: #ff5000;
  }

  .price-wrapper .price-value {
    display: inline-block;
    font-size: 22px;
    line-height: 22px;
  }
</style>