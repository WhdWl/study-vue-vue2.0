<template>
  <div id="app">
    <Header/>
    <div class="sticky">
      <Menu/>
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
</style>

<script>
import Header from './components/layout/Header.vue'
import Menu from './components/layout/Menu.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App'
  , components: {
      Header
    , Menu
    , Footer
  }
}
</script>