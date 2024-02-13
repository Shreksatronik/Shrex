<template>
    <div class="addcourses">
        <div class = "navigation">
  <router-link class="onMainPageFeed" to="/">На главную</router-link>
  <router-link class="AllCourses" to="/all-courses">Все курсы</router-link>
  <router-link class="AddedCourses" to="my-courses">Созданные курсы</router-link>
  <router-link class="AddCourse" to="/add-courses">Создать курс</router-link>

</div>
        <button class="UserButton6" @click="OnUserPage" style="border: 0; background: transparent">
 <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" width="115" height="70" alt="userpage" />
</button>
        <div class="card" style="width: 50rem; height: 50rem;">
           <h1 class="Add">Создать курс</h1>
    <h1 class="p1">Название курса</h1>
    <input class="i" placeholder="" />
    <h1 class="p2">Целевая аудитория</h1>
    <input class="i2" placeholder=""  type="text"/>
    <h1 class="p3">Цели и задачи курса</h1>
    <textarea class="i3" placeholder="" ></textarea>
    <h1 class="p4">Сценарий курса</h1>
    <textarea class="i4" placeholder=""></textarea>
    <button class="addPhoto" @click=""  > Добавить аватар курса </button>
    <button class="addScorm" @click=""  > Загрузить SCORM-пакет </button>
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
.addPhoto{
  border: none;
  font-size: 150%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  border-radius: 30px;
  position: absolute;
  top:80%;
  left:51%;
  color:#FFFFFF;
  background: #d53f2593;
  transition: 0.5s;
  justify-content: center;
  width: 340px;
   height: 80px;

}
.addPhoto:hover{
    transform: translate(0,-3px);
  box-shadow: 0 20px 40px 0 rgb(199, 199, 199);
}
.addScorm{
  border: none;
  font-size: 150%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  border-radius: 30px;
  position: absolute;
  top:80%;
  left:6.5%;
  color:#FFFFFF;
  background: #d53f2593;
  transition: 0.5s;
  justify-content: center;
  width: 340px;
   height: 80px;

}
.addScorm:hover{
    transform: translate(0,-3px);
  box-shadow: 0 20px 40px 0 rgb(199, 199, 199);
}
.p1{
    position:absolute;   
    top:15%;
    font-size: 27px;
    left:6.5%;
}
.i{
    position:absolute;   
    top:20%;
    align-self: center;
    font-size: 28px;
    width: 700px;
    border: none;
    border-radius: 10px;
    transition: 0.5s;
    background-color: rgba(240, 248, 255, 0.637);
}
.i:hover{
    transform: translate(0,-3px);
  box-shadow: 0 20px 40px 0 rgb(199, 199, 199);
}
.p2{
    position:absolute;   
    top:27%;
    font-size: 27px;
    left:6.5%;
}
.i2{
    position:absolute;   
    top:32%;
    align-self: center;
    font-size: 28px;
    width: 700px;
    border: none;
    border-radius: 10px;
    transition: 0.5s;
    background-color: rgba(240, 248, 255, 0.637);
}
.i2:hover{
    transform: translate(0,-3px);
  box-shadow: 0 20px 40px 0 rgb(199, 199, 199);
}
.p3{
    position:absolute;   
    top:39%;
    font-size: 27px;
    left:6.5%;
}
.i3{
    position:absolute;   
    top:44%;
    align-self: center;
    font-size: 20px;
    width: 700px;
    height: 70px;
    border: none;
    border-radius: 10px;
    transition: 0.5s;
    background-color: rgba(240, 248, 255, 0.637);
}
.i3:hover{
    transform: translate(0,-3px);
  box-shadow: 0 20px 40px 0 rgb(199, 199, 199);
}
.p4{
    position:absolute;   
    top:54%;
    font-size: 27px;
    left:6.5%;
}
.i4{
    position:absolute;   
    top:60%;
    align-self: center;
    font-size: 20px;
    width: 700px;
    height: 130px;
    border: none;
    border-radius: 10px;
    transition: 0.5s;
    background-color: rgba(240, 248, 255, 0.637);
    
}
.i4:hover{
    transform: translate(0,-3px);
  box-shadow: 0 20px 40px 0 rgb(199, 199, 199);
}
.Add{
    font-size: 50px;
   position:absolute;               
   top:5%;  
  left:30%;
}

.UserButton6{
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
.addcourses{
    background-image: url("img2/5.jpg");
    background-size: cover;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    height: 1024px;
    color: white;
    background-repeat: no-repeat;
}

</style>
