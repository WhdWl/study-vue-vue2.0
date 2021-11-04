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
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
}
.menu_left {
  width: 200px;
  line-height: 100px;
  text-align: center;
  border-right: 1px solid #ebebeb;
}
.menu_center {
  line-height: 100px;
  text-align: center;
}
.menu_right {
  width: 200px;
  line-height: 100px;
  text-align: center;
  border-left: 1px solid #ebebeb;
}
</style>

<script>
export default {
  name: "Menu.vue"
}
</script>