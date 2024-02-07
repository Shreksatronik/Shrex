<template>
  <div class="home">
  <nav class="nav">
  <a class="nav-link px-3" href="#">О нас</a>
  <a class="nav-link px-1" href="#">Контакты</a>
  <a class="nav-link" href="#">Услуги</a>
</nav>
  <main class="px-3">
    <h1>SHmoodle</h1>
    <p class="lead">Добавьте интересные подробности о вашей компании. Двойной клик по тексту или вкладка «контент» для редактирования текста.</p>
    <p class="lead">
    <button @click="OnRegisterPage">Зарегистрироваться</button>
    </p>
  </main>
</div>
</template>
<script setup>
import {useRouter} from "vue-router";
const router = useRouter();

const OnRegisterPage = ()=>{
  
    router.push("/register");
  };
</script>


<style>
.home{
    background-image: url("img/1.png");
    background-size: cover;
    min-height: 1280px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: white;
    background-repeat: no-repeat;
}
nav .nav-link {
  color:black;
}

 
</style>

