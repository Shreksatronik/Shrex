<script setup>

</script>
<template>
  <div class = "App">
    <nav>
    <router-link to="/">Home</router-link>|
    <router-link to="/feed">Feed</router-link>|
    <router-link to="/register">Register</router-link>|
    <router-link to="/sign-in">Login</router-link>|
    <button @click="handleSignOut" v-if = "isLoggedIn">Sign Out</button>
  </nav>
  <router-view />
  </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {useRouter} from "vue-router";
const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth,(user)=> {
      if (user){
        isLoggedIn.value = true;
      }else{
        isLoggedIn.value = false;
      }
  });
});
const handleSignOut = ()=>{
  signOut(auth).then(()=>{
    router.push("/");
  });

};
</script>
<style lang="css">
  .App {
    background: #DCDDDF url(https://cssdeck.com/uploads/media/items/7/7AF2Qzt.png);
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-fint-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0 auto;
    position: relative;
  }
  .h1{ 
    font-size:28px;
  }


</style>