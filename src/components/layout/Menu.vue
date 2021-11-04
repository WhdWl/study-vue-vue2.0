<template>
  <div class="menu">
    <div class="menu_left" @click="clickLogo">
      logo
    </div>
    <div class="menu_center" @click="clickMenu">
      menu
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
export default {
  name: 'Menu'
  , methods: {
    clickLogo() {
      this.$router.push({
        name: 'Main'
      });
    }
    , clickMenu() {
      this.$router.push({
        name: 'ContentTypeA'
      });
    }
    , clickLogin() {
      alert('login');
    }
  }
}
</script>