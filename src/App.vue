<template>
  <div id="app">
    <Header class="header"/>
    <div class="sticky">
      <TopBar class="topBar"/>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer class="footer"/>
  </div>
</template>

<style scoped>
  #app {
    width: 1152px;
    /*1024*/
    /*512*/
    /*256*/
    /*128*/
    /*64*/
    /*32*/
    /*16*/
    /*8*/
    /*4*/
    /*2*/
    /*1*/
    background-color: #fffff0;
  }
  .header {
    border-top: 3px solid #036635;
    border-left: 3px solid #036635;
    border-right: 3px solid #036635;
    height: 384px;
    line-height: 384px;
    text-align: center;
  }
  .topBar {
    border-top: 3px solid #036635;
    border-right: 3px solid #036635;
    border-bottom: 3px solid #036635;
    border-left: 3px solid #036635;
    /*padding-bottom: 10px solid #036635;*/
    /*margin-bottom: 10px solid #036635;*/
    height: 64px;
    line-height: 64px;
  }
  .sticky {
    position: sticky;
    top: 0px;
  }
  .content {
    border-left: 3px solid #036635;
    border-right: 3px solid #036635;
  }
  .footer {
    border-top: 3px solid #036635;
    border-right: 3px solid #036635;
    border-bottom: 3px solid #036635;
    border-left: 3px solid #036635;
    height: 200px;
    line-height: 200px;
    text-align: center;
  }
</style>

<script>
import Header from '@/components/layout/Header.vue'
import TopBar from '@/components/layout/TopBar.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'App'
  , components: {
      Header
    , TopBar
    , Footer
  }
}
</script>