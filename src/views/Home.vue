<template>
  <div>
    <h1>Welcome to Home!!</h1>
    <button type="button" @click="printenv">ENV LOG PRINT</button>
  </div>
</template>

<script>
export default {
  name: "Home",

  methods: {
    printenv () {
      console.log(process.env);
    }
  }
}
</script>