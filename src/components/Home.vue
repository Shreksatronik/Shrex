<template>
  <div class="home">
  <nav class="nav">
  <a class="nav-link px-3" href="#">О нас</a>
  <a class="nav-link px-1" href="#">Контакты</a>
  <a class="nav-link" href="#">Услуги</a>
</nav>
  <main class="px-3">
    <div>
      <h1 class = "Title">SHmoodle</h1>
    <h3 class = "Title2">Интеллектуальная образовательная среда</h3>
    </div>
    <div class = "buttons">
      <button class="buttonZareg" @click="OnRegisterPage"  > Зарегистрироваться </button>
      <button  class="voitiButton" @click="OnSignInPage" >Войти</button>

    </div>
  
    
  </main>
  </div>

<div class="home2">


</div>
<div class="home3">


</div>
<div class="home4">


</div>
<div class="home5">


</div>

</template>
<script setup>

import {useRouter} from "vue-router";
import {isLoggedIn} from "../views/Register.vue"
const router = useRouter();
  const OnRegisterPage = ()=>{
    router.push("/register");
  };
  const OnSignInPage = ()=>{
    router.push("/sign-in");
};



</script>


<style>
.home{
    background-image: url("img/3.jpg");
    background-size: cover;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    height: 1024px;
    color: white;
    background-repeat: no-repeat;
}
.home2{
  background-color: #FFFFFF;
  background-size: cover;
  height: 1024px;
}
.home3{
  background-color: #CFCFCF;
  background-size: cover;
  height: 1024px;
}
.home4{
  background-color: #D0AE5A;
  background-size: cover;
  height: 630px;
}
.home5{
  background-color: #FFFFFF;
  background-size: cover;
  height: 1024px;
}
nav .nav-link {
  color:white;
}
.Title{
  font-size: 200px;
   position:absolute;               
   top:30%;  
   left:24%;                       
 
}
.Title2{
  position:absolute; 
  color:#18130ad2;  
  font-size: 35px;            
   top:53%;  
   left:30%;  
}
.buttonZareg{
  border: none;
  font-size: 185%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  border-radius: 30px;
  position: absolute;
  top:70%;
  left:38%;
  color:#FFFFFF;
  background: #d5a32585;
  transition: 0.5s;
  justify-content: center;
  width: 390px;
   height: 60px;
}

.buttonZareg:hover{
  transform: translate(0,-3px);
  box-shadow: 0 20px 40px 0 rgb(199, 199, 199);
}

.voitiButton{
  border-radius: 100px;
  border: none;
  transition: 0.5s;
  position: absolute;
  left: 46%;
  top: 78%;
  justify-content: center;
  color:#FFFFFF;
  background: none;
  font-size: 180%;
}
.voitiButton:hover{
  transform: translate(0,-3px);
}

</style>

