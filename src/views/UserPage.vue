<template>
    <div class="userpage">
        <router-link class="onMainPageFeed" to="/">На главную</router-link>
  <router-link class="AllCourses" to="/all-courses">Все курсы</router-link>
  <router-link class="AddedCourses" to="/my-courses">Созданные курсы</router-link>
  <router-link class="AddCourse" to="/add-courses"  >Создать курс</router-link>

        <div class="card" style="width: 30rem; height: 45rem;">
            <div class = "navigation">
 
</div>
            <img class = "userimage" src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" width="115" height="70" alt="userpage" />
            <h1 class="LichniyCab">Личный кабинет</h1>
            <p class="email2"><input type ="text" class= "form-control"  placeholder = "Email" v-model="email" id="email" required/></p>
            <p class="password2"><input type ="password" class= "form-control" placeholder = "Password" v-model="password" id="password"/></p>
            <button class = "btnvhangeinf" @click="">Редактировать информацию</button>
            <button class = "btndelete" @click="">Удалить аккаунт</button>
            <button class = "btnSignOut" @click="handleSignOut" v-if = "isLoggedInn">Выйти</button>
        </div>
    </div>
</template>
<script setup>

import {useRouter} from "vue-router";
import {onMounted,ref} from "vue";
import {getAuth, createUserWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth";
const isLoggedInn = ref(false);
const router = useRouter();

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
const handleSignOut = ()=>{
  signOut(auth).then(()=>{
    router.push("/");
  });
};
</script>
<style>
.btndelete{
    position: absolute;
    top:70%;
    align-self: center;
    border: none;
  font-size: 150%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  border-radius: 10px;
  color:#FFFFFF;
  background: #8b191979;
  transition: 0.5s;
  justify-content: center;
  width: 400px;
   height: 60px;

}
.btnvhangeinf{
    position: absolute;
    top:60%;
    align-self: center;
    border: none;
  font-size: 150%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  border-radius: 10px;
  color:#FFFFFF;
  background: #409b1c93;
  transition: 0.5s;
  justify-content: center;
  width: 400px;
   height: 60px;

}
.btnSignOut{
    position: absolute;
    top:85%;
    align-self: center;
    border: none;
  font-size: 150%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  border-radius: 10px;
  color:#FFFFFF;
  background: #d58f2593;
  transition: 0.5s;
  justify-content: center;
  width: 200px;
   height: 50px;

}
.email2{
    position: absolute;
    top:35%;
    align-self: center;
    
    width:400px;
}
.password2{
    position: absolute;
    top:45%;
    align-self: center;
    width:400px;
    
}
.LichniyCab{
    font-size: 50px;
    position: absolute;
     align-self: center;
    top:20%;
}
.userimage{
    position: absolute;
    align-self: center;
    top:10%;
}
.card{
    position: absolute;
    left:35%;
    right:0;
    top:10%;
    border-radius: 10%;
    background-color: #d9d9d9a1;
}
.userpage{
    background-image: url("img2/5.jpg");
    background-size: cover;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    height: 1024px;
    color: white;
    background-repeat: no-repeat;
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
</style>
