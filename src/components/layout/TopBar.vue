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
  display: flex;
  justify-content: space-between;
  /*background-color: #000000;*/
}
.menu_left {
  width: 128px;
  text-align: center;
  cursor: pointer;
  margin: 0px 0px 0px 0px;
  border: 0px solid ;
  padding: 0px 0px 0px 0px;
}
.menu_center {
  width: 890px;
  display: flex;
  justify-content: space-around;
}
.menu_right {
  width: 128px;
  text-align: center;
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
            menu_name: '메뉴1'
          , menu_code: 'A'
          , menu_num: 1
        }
        , {
            menu_name: '메뉴2'
          , menu_code: 'B'
          , menu_num: 2
        }
        , {
            menu_name: '메뉴3'
          , menu_code: 'C'
          , menu_num: 3
        }
        , {
          menu_name: '메뉴4'
          , menu_code: 'D'
          , menu_num: 4
        }
        , {
          menu_name: '메뉴5'
          , menu_code: 'E'
          , menu_num: 5
        }
      ]
    }
  }
}
</script>