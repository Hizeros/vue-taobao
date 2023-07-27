<script>
  export default {
    name:"FooImage",
  }
</script>

<template>
  <div id="FooImage" class="FI_wrap">
    <el-carousel :interval="2000">
      <el-carousel-item>
        <router-link to="Detail">
          <img alt=" " src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/O1CN01e0c4Eq1eWdC24ncT5_!!6000000003879-0-octopus.webp" class="FI_item">
        </router-link>
      </el-carousel-item>
      <el-carousel-item>
        <router-link to="Detail">
          <img alt=" " src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/O1CN01KjA7jW1TseSydYUSW_!!6000000002438-0-octopus.webp" class="FI_item">
        </router-link>
      </el-carousel-item>
      <el-carousel-item>
        <router-link to="Detail">
          <img alt=" " src="https://hizeros-bucket.oss-cn-beijing.aliyuncs.com/images/O1CN01KXXu9Q28sYd2p5BuU_!!6000000007988-0-octopus.webp" class="FI_item">
        </router-link>
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<style scoped>
  .FI_wrap{
    position: absolute;
    top: 90px;
    left: 260px;
    width: 500px;
    height: 280px;
  }
  .FI_item{
    width: 500px;
    height: 280px;
  }
</style>