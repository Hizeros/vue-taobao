<script>
  export default {
    name:"MidInput",
  }
</script>

<template>
  <div id="MidInput" class="MidInput">
    <a class="mid_left_img_wrap">
      <img alt="淘宝" src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/%E6%B7%98%E5%AE%9D.png" class="mid_left_img">
    </a>
    <div>
      <div class="mid_input_frame">
        <div class="mid_input_list">
          <ul style="list-style: none">
            <li class="mid_input_list_item">宝贝</li>

          </ul>
        </div>
        <div>
          <input class="mid_input_box" type="text" placeholder="连衣裙">
        </div>
        <div>
          <button class="mid_input_button">搜索</button>
        </div>
      </div>
      <div class="mid_input_nav">
        <a class="mid_nav_item">新款连衣裙</a>
        <a class="mid_nav_item">四件套</a>
        <a class="mid_nav_item">潮流T恤</a>
        <a class="mid_nav_item">时尚女鞋</a>
        <a class="mid_nav_item">短裤</a>
        <a class="mid_nav_item">半身裙</a>
        <a class="mid_nav_item">男士外套</a>
        <a class="mid_nav_item">墙纸</a>
        <a class="mid_nav_item">行车记录仪</a>
        <a class="mid_nav_item">新款男鞋</a>
      </div>
    </div>
    <a class="mid_right">
      <p class="mid_right_text">下载淘宝</p>
      <img alt="下载淘宝" src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/%E4%B8%8B%E8%BD%BD.webp" class="mid_right_img">
    </a>
  </div>
</template>

<style scoped>
  .MidInput{
    height: 110px;
    width: 1000px;
    display: flex;
    position: relative;
    top: 0;
    left: 200px;
  }
  .mid_left_img_wrap:hover{
    background-color: #eae8eb;
  }
  .mid_left_img{
    position: relative;
    top: 10px;
    left: 15px;
    width: 80px;
    height: 80px;
  }
  .mid_input_frame{
    border: 2px solid #ff5000;
    background-color: #ffffff;
    display: flex;
    position: relative;
    top: 28px;
    left: 90px;
    border-radius: 80px;
    width: 650px;
    height: 45px;
  }
  .mid_input_list{
    width: 60px;
    height: 35px;
    display: flex;
    position: relative;
    top: 3px;
    left: 10px;
  }
  .mid_input_list_item{
    position: absolute;
    top: 4px;
    left: 15px;
    font-size: 16px;
  }
  .mid_input_box{
    border: 0;
    outline: none;
    position: absolute;
    top: 1px;
    right: 75px;
    height: 40px;
    width: 500px;
  }
  .mid_input_button{
    border: 2px solid #ff7e00;
    background-color: #ff7e00;
    position: absolute;
    top: 3px;
    right: 5px;
    border-radius: 80px;
    width: 70px;
    height: 35px;
    color: #f2f2f2;
    font-size: 18px;
  }
  .mid_input_nav{
    width: 600px;
    height: 20px;
    position: absolute;
    left: 200px;
    bottom: 10px;
  }
  .mid_nav_item{
    font-size: 12px;
    color: #666666;
    padding-left: 10px;
  }
  .mid_nav_item:hover{
    color:#f22e00;
    background-color: #eae8eb;
  }
  .mid_right{
    position: absolute;
    top: 10px;
    right: 15px;
    background-color: #ffffff;
    width: 80px;
    height: 90px;
  }
  .mid_right_img{
    position: absolute;
    top: 25px;
    right: 10px;
    width: 60px;
    height: 60px;
  }
  .mid_right_text{
    position: absolute;
    right: 15px;
    font-size: 13px;
    color: #ff5000;
  }
</style>