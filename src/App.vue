<script setup>

</script>
<template>
  <div class = "App">
    <nav>
    <router-link to="/">Home</router-link>|
    <router-link to="/feed">Feed</router-link>|
    <router-link to="/register">Register</router-link>|
    <router-link to="/sign-in">Login</router-link>|
  </nav>
  <router-view />
  </div>

</template>
<style lang="css">
  .App {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-fint-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>