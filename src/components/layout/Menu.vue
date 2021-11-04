<template>
  <div class="menu">
    <div class="menu_left">
      logo
    </div>
    <div class="menu_center">
      menu
    </div>
    <div class="menu_right">
      login
    </div>
  </div>
</template>

<style scoped>
.menu {
  height: 100px;
  text-align: center;
  border-bottom: 1px solid #ebebeb;
  display: flex;
}
.menu_left {
  width: 100px;
  line-height: 100px;
  text-align: center;
  border-right: 1px solid #ebebeb;
}
.menu_center {
  width: 100%;
  line-height: 100px;
  text-align: center;
  border-right: 1px solid #ebebeb;
}
.menu_right {
  width: 300px;
  line-height: 100px;
  text-align: center;
}
</style>

<script>
export default {
  name: "Menu.vue"
}
</script>