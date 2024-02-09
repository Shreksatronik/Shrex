<template>
  <div class="register">
  
    <router-link class="onMainPage" to="/">На главную</router-link>
   
    <div class="card" style="width: 30rem; height: 45rem;">
        <h1 class="MaintitleReg">SHmoodle</h1>
    <h1 class="create">Create an Account</h1>
    <p class="Regemail"><input type ="text" class= "form-control"  placeholder = "Email" v-model="email" id="email" required/></p>
    <p class="Regpassword"><input type ="password" class= "form-control" placeholder = "Password" v-model="password" id="password"/></p>
    <p><button class="regbtn" @click="register">Зарегистрироваться</button></p>
    <h5 class="alr">Уже есть аккаунт?</h5>
    <router-link class ="alreadyLogInLink" to="/sign-in">Войти</router-link>    
  </div>
  </div>

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
<style>
.card{
  position: absolute;
    left:35%;
    right:0;
    top:10%;
    border-radius: 10%;
    background-color: #d9d9d9a1;
}
.register{
    background-image: url("img2/5.jpg");
    background-size:cover;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    height: 1024px;
    color: white;
    background-repeat: no-repeat;
}
.MaintitleReg{ 
  font-size: 400%;
  text-align: center;
  position: absolute;
  top:15%;
  left:0;
  right:0;}
.Regemail{
  position: absolute;
    top:35%;
    left:12%;
    width:368px;
}
.Regpassword{
  position: absolute;
    top:45%;
    left:12%;
    width:368px;
}
.create{
  position: absolute;
    top:9%;
    left:16%;
}
.regbtn{
  position: absolute;
    top:55%;
    left:24%;
    border: none;
  font-size: 150%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  border-radius: 10px;
  color:#FFFFFF;
  background: #d58f2593;
  transition: 0.5s;
  justify-content: center;
  width: 250px;
   height: 60px;

}
.alr{
  position: absolute;
    font-size: 19px;
    width: 300px;
   height: 900px;
   top:67.5%;
    left:12%;
}

.alreadyLogInLink{
  position: absolute;
  color:white;
    font-size: 19px;
    width: 300px;
   height: 900px;
   top:67%;
    left:36%;
}
.onMainPage{
  position: absolute;
  color:white;
  font-size: 19px;
  top:1%;
  left:1%;
}
</style>