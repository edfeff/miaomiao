<template>
  <div id="main">
    <Header title="喵喵影院"/>
    <CiList/>
    <TabBar/>
  </div>
</template>

<script>
//导入组件
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import CiList from "@/components/CiList";
export default {
  name: "Cinema",
  //注册组件
  components: {
    Header,
    TabBar,
    CiList
  }
};
</script>

<style scoped>
</style>
