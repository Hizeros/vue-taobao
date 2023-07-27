<script>
  import Foot from "@/components/home/Foot.vue";
  import MidInput from "@/components/home/MidInput.vue";

  export default {
    name:"Bottom",
    components:{Foot,MidInput},
  }
</script>

<template>
  <div id="Bottom" class="Bottom">
    <MidInput/>
    <Foot/>
  </div>
</template>

<style scoped>
  .Bottom{
    background-color: #eae8eb;
    height: 1200px;
    display: flex;
    position: absolute;
    top: 40px;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>