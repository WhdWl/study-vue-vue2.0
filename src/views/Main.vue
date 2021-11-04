<template>
  <div>
    <h1>Welcome to Main!!</h1>
    <button type="button" @click="printenv">ENV LOG PRINT</button>
  </div>
</template>

<script>
export default {
  name: "Main",

  methods: {
    printenv () {
      console.log(process.env);
    }
  }
}
</script>