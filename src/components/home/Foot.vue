<script>
  import FooImage from "@/components/home/FooImage.vue";
  import FooLeftNav from "@/components/home/FooLeftNav.vue";
  import FooRightNav from "@/components/home/FooRightNav.vue";
  import FooInput from "@/components/home/FooInput.vue";
  import Show from "@/components/home/Show.vue";

  export default {
    name:"FootNav",
    components:{FooImage,FooInput,FooLeftNav,FooRightNav,Show},
  }
</script>

<template>
  <div id="Foot" class="Foot">
    <FooLeftNav/>
    <FooRightNav/>
    <FooImage/>
    <FooInput/>
    <show/>
  </div>
</template>

<style scoped>
  .Foot{
    background-color: #ffffff;
    border-radius: 15px 15px 0 0;
    height: 1000px;
    position: absolute;
    top: 110px;
    left:150px;
    right:180px;
    bottom: 10px;
  }
</style>