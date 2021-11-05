<template>
  <div id="app">
    <Header/>
    <div class="sticky">
      <TopBar/>
    </div>
    <div id="content" class="content">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
  .sticky {
    position: sticky;
    top: 0px;
  }

  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
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