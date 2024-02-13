<template>
  <div class="home">
  <main class="px-3">
    <div>
      <button class="UserButton2" @click="OnUserPage" style="border: 0; background: transparent">
 <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" width="115" height="70" alt="userpage" />
</button>
    <h1 class = "Title">SHmoodle</h1>
    <h3 class = "Title2">Интеллектуальная образовательная среда</h3>
    </div>
    <div class = "buttons">
      <button class="buttonZareg" @click="OnRegisterPage" v-if ="!isLoggedInn" > Зарегистрироваться </button>
      <button  class="voitiButton" @click="OnSignInPage"  v-if ="!isLoggedInn" >Войти</button>
      <router-link class="onMainPageFeed" to="/" v-if = "isLoggedInn" >На главную</router-link>
      <router-link class="AllCourses" to="/all-courses"  v-if = "isLoggedInn">Все курсы</router-link>
      <router-link class="AddedCourses" to="/my-courses"  v-if = "isLoggedInn">Созданные курсы</router-link>
      <router-link class="AddCourse" to="/add-courses"  v-if = "isLoggedInn">Создать курс</router-link>

    </div>
  
    
  </main>
  </div>

<div class="home2">
  <div>
    <img src="images/Young female chatting online 1.png" alt="young female">
  </div>
 
  <h1 class="text1">О нашей компании
  коротко представьтесь и расскажите
 о компании или сервисе
 в 3-4 строках. С какими клиентами
  вы работаете, 
 что вас вдохновляет. Чем гордится ваша команда, 
 какие у нее ценности и мотивация.</h1>

</div>
<div class="home3">
<h1 class ="text2">Наши услуги</h1>
</div>
<div class="home4">
<h1 class="text3">
  Мотивирующая фраза
Добавьте пару строк текста и расскажите что 
получит пользователь, кликнув на кнопку.
<button class="buttonWOW" @click="" >Хочешь узнать больше?</button>
</h1>

</div>
<div class="home5">
<h1 class="text4">НАШИ КОНТАКТЫ
+1 123 456 78 hello@company.com
</h1>
<h1 class="text5">
Мы в социальных сетях:</h1>
</div>

</template>
<script setup>

import {useRouter} from "vue-router";
import {onMounted,ref} from "vue";
import {getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth";
const isLoggedInn = ref(false);
const router = useRouter();
  const OnRegisterPage = ()=>{
    router.push("/register");
  };
  const OnSignInPage = ()=>{
    router.push("/sign-in");
};
const OnUserPage = ()=>{
    router.push("/user-page");
  };

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth,(user)=> {
      if (user){
        isLoggedInn.value = true;
      }else{
        isLoggedInn.value = false;
      }
  });
});


</script>


<style>
.UserButton2{
  position: absolute;
  top:0%;  
  right:0%; 
   
}
.onMainPageFeed{
  position: absolute;
  color:white;
  font-size: 19px;
  top:1%;
  left:1%;
}
.AllCourses{
  position: absolute;
  color:white;
  font-size: 19px;
  top:1%;
  left:7%;
}
.AddedCourses{
  position: absolute;
  color:white;
  font-size: 19px;
  top:1%;
  left:12.3%;
}
.AddCourse{
  position: absolute;
  color:white;
  font-size: 19px;
  top:1%;
  left: 21%;
}
.text1{
  font-size: 200%;
  text-align: center;
  position: absolute;
  left:60%;
  right:15%;
  top:150%;
}
.text2{
  text-align: center;
  position: absolute;
  left:0;
  right:0;
  top:230%;
}
.text3{
  text-align: center;
  position: absolute;
  left:5%;
  right:5%;
  top:340%;
}
.text4{
  text-align: center;
  position: absolute;
  left:15%;
  right:15%;
  top:450%;
}
.text5{
  text-align: center;
  position: absolute;
  left:15%;
  right:15%;
  top:455%;
}
.buttonWOW{
  border: none;
  font-size: 90%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  border-radius: 30px;
  position: absolute;
  top:170%;
  left:38%;
  color:#FFFFFF;
  background: #d53f2593;
  transition: 0.5s;
  justify-content: center;
  width: 390px;
   height: 100px;

}
.buttonWOW:hover{
  transform: translate(0,-3px);
  box-shadow: 0 20px 40px 0 rgb(199, 199, 199);
}

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

