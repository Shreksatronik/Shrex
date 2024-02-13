<template>
    <div class="allcourses">
        <div class = "navigation">
  <router-link class="onMainPageFeed" to="/">На главную</router-link>
  <router-link class="AllCourses" to="/all-courses">Все курсы</router-link>
  <router-link class="AddedCourses" to="my-courses">Созданные курсы</router-link>
  <router-link class="AddCourse" to="/add-courses">Создать курс</router-link>

</div>
        <button class="UserButton1" @click="OnUserPage" style="border: 0; background: transparent">
 <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" width="115" height="70" alt="userpage" />
</button>
        <div class="card" style="width: 50rem; height: 50rem;position: absolute; top:9%; left:27%; background-color: #d9d9d9a1; border-radius: 30px;">
           <h1 class="All">Все курсы</h1>
          <select class="select border rounded-md outline-none" >
            <option>По названию</option>
            <option>По целевой аудитории</option>
          </select>









        <div class="grid grid-cols-1 gap-5">
          <div class="btn  " style=" border: none;
  font-size: 185%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border-radius: 30px;
  position: absolute;
  transition: 0.5s;
  width: 690px;
  font-size: 25px; height:20%; border-radius: 20px; border: none;left:7%;top: 17%;background-color: #d9d9d9a1;">
            <div class="row justify-content-start">
              <h2 class="card-title col-9" style="" >Курсы управления гневом</h2>   
             <div class="col-3">
            <img class="btn-img" src="/images/Young female chatting online 3.png"  alt="y"/>
                 
           </div>
          </div>
           </div>
           <div class="grid grid-cols-1 gap-5">
          <div class="btn  " style=" border: none;
  font-size: 185%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border-radius: 30px;
  position: absolute;
  transition: 0.5s;
  width: 690px;
  font-size: 25px; height:20%; border-radius: 20px; border: none;left:7%;top: 40%;background-color: #d9d9d9a1;">
            <div class="row justify-content-start">
              <h2 class="card-title col-9" style="" >Курсы управления гневом</h2>   
             <div class="col-3 ">
            <img class="btn-img"  src="/images/Young female chatting online 3.png"  alt="y"/>
                 
           </div>
          </div>
           </div>

        </div>
        
          </div> 
        </div>
    </div>
</template>
<script setup>
import {useRouter} from "vue-router";
import {onMounted,ref} from "vue";

defineProps({
  items:Array
}
)
const router = useRouter();
  const OnUserPage = ()=>{
    router.push("/user-page");
  };
</script>
<style>

.All{
    font-size: 50px;
   position:absolute;               
   top:5%;  
  left:34%;
}
.UserButton1{
  position: absolute;
  top:0%;  
  right:0%; 
   
}

.allcourses{
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
