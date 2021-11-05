<template>
  <div>menu</div>
</template>

<style scoped>
div {

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
      , menu_num: {
        type: Number
        , default: 0
      }
    }
  }
}
</script>