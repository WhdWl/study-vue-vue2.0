<template>
  <div class="menu">
    <div class="menu_left" @click="clickLogo">
      logo
    </div>
    <div class="menu_center">
      <Menu :menuMap="menuMap" v-for="(menuMap, idx) in menuList" :key="idx"/>
    </div>
    <div class="menu_right" @click="clickLogin">
      login
    </div>
  </div>
</template>

<style scoped>
.menu {
  height: 100px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
}
.menu_left {
  width: 200px;
  line-height: 100px;
  text-align: center;
  border-right: 1px solid #ebebeb;
  cursor: pointer;
}
.menu_center {
  line-height: 100px;
  text-align: center;
  cursor: pointer;
}
.menu_right {
  width: 200px;
  line-height: 100px;
  text-align: center;
  border-left: 1px solid #ebebeb;
  cursor: pointer;
}
</style>

<script>
import Menu from "@/components/layout/topBar/Menu";

export default {
  name: 'TopBar'
  , components: {
    Menu
  }
  , methods: {
    clickLogo() {
      this.$router.push({
        name: 'Main'
      });
    }
    , clickLogin() {
      alert('login');
    }
  }
  , data() {
    return {
      menuList: [
          {
            menu_name: 'A'
          , menu_num: 1
        }
        , {
            menu_name: 'B'
          , menu_num: 2
        }
        , {
            menu_name: 'C'
          , menu_num: 3
        }
      ]
    }
  }
}
</script>