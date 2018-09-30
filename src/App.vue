<template>
  <div id="app">
    <button @click="show=true">测试</button>
    <side v-model="show"></side>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show:false,
    }
  },
  methods:{

  },
  components:{
  }
}
</script>

<style  lang="less">
  @import "style/common";
</style>
