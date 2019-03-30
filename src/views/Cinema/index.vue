<template>
  <div>
    <Header title="喵喵影院"/>
    <TabBar/>
  </div>
</template>

<script>
//导入组件
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";

export default {
  name: "Cinema",
  //注册组件
  components: {
    Header,
    TabBar
  }
};
</script>

<style>
</style>
