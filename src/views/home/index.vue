<script>
import {defineComponent} from 'vue'
import Top from "@/components/home/Top.vue";
import Bottom from "@/components/home/Bottom.vue";
import FixNav from "@/components/home/FixNav.vue";
export default defineComponent({
  name: "home",
  components: {Bottom, FixNav, Top},
})
</script>

<template>
  <div id="Home" class="home">
    <Top/>
    <Bottom/>
    <FixNav></FixNav>
  </div>
</template>

<style scoped>

</style>