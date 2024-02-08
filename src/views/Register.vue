<template>
    <h1>Create an Account</h1>
    <p><input type ="text" placeholder = "Email" v-model="email"/></p>
    <p><input type ="password" placeholder = "Password" v-model="password"/></p>
    <p><button @click="register">Submit</button></p>
    <button @click="handleSignOut" v-if = "isLoggedIn">Sign Out</button>
</template>

<script setup>
import {onMounted,ref} from "vue";
import {getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth";
import {useRouter} from 'vue-router';
const isLoggedIn = ref(false);
const email = ref("");
const password = ref("");
const router = useRouter()
const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data)=> {
        console.log("Successfully registered!");
        router.push('/feed');
    })
    .catch((error)=>{
        console.log(error.code);
        alert(error.message);
    });
};
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