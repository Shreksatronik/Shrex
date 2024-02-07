<template>
  <div class="home">
  <nav class="nav">
  <a class="nav-link px-3" href="#">О нас</a>
  <a class="nav-link px-1" href="#">Контакты</a>
  <a class="nav-link" href="#">Услуги</a>
</nav>
  <main class="px-3">
    <h1 class = "Title">SHmoodle</h1>
    <p class="lead">Добавьте интересные подробности о вашей компании. Двойной клик по тексту или вкладка «контент» для редактирования текста.</p>
    <p class="lead">
    <button @click="OnRegisterPage">Зарегистрироваться</button>
    </p>
    <button @click="OnLoginPage">Войти</button>
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
const router = useRouter();

const OnRegisterPage = ()=>{
  
    router.push("/register");
  };

  const OnLoginPage = ()=>{
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
  color:black;
}
.Title{
  font-size: 120px;
}

 
</style>

