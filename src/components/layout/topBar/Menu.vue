<template>
<!--  <div v-for="(menuMap, idx) in menuList" :key="idx">{{menuMap.menu_name}}</div>-->
  <div @click="menuClick(menuMap.menu_code)">{{menuMap.menu_name}}</div>
</template>

<style scoped>
div {
  cursor: pointer;
}
</style>

<script>
export default {
  name: 'Menu'
  , props: {
    menuMap: {
      menu_name: {
        type: String
        , default: ''
      }
      , menu_code: {
        type: String
        , default: ''
      }
      , menu_num: {
        type: Number
        , default: 0
      }
    }
  }
  , methods: {
    menuClick(menu_code) {
      this.$router.push({
        name: 'ContentType' + menu_code
      });
      return true;
    }
  }
}
</script>