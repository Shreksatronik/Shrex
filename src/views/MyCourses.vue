<template>
    <div class="mycourses">
        <div class = "navigation">
  <router-link class="onMainPageFeed" to="/">На главную</router-link>
  <router-link class="AllCourses" to="/all-courses">Все курсы</router-link>
  <router-link class="AddedCourses" to="/my-courses">Созданные курсы</router-link>
  <router-link class="AddCourse" to="/add-courses">Создать курс</router-link>

</div>
        <button class="UserButton3" @click="OnUserPage" style="border: 0; background: transparent">
 <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" width="115" height="70" alt="userpage" />
</button>
        <div class="card" style="width: 50rem; height: 50rem;">
           <h1 class="My">Созданные курсы</h1>
           
        </div>
    </div>
</template>
<script setup>
import {useRouter} from "vue-router";
import {onMounted,ref} from "vue";
const router = useRouter();
  const OnUserPage = ()=>{
    router.push("/user-page");
  };
</script>
<style>
.My{
    font-size: 50px;
   position:absolute;               
   top:5%;  
  left:23%;
}
.UserButton3{
  position: absolute;
  top:0%;  
  right:0%; 
   
}
.card{
    position: absolute;
    left:28%;
    top:10%;
    border-radius: 10%;
    background-color: #d9d9d9a1;
}
.mycourses{
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
