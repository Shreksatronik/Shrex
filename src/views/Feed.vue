<template>
<div class = "feed">
<div class = "navigation">
  <router-link class="onMainPageFeed" to="/">На главную</router-link>
  <router-link class="AllCourses" to="">Все курсы</router-link>
  <router-link class="AddedCourses" to="">Созданные курсы</router-link>
</div>
<h1 class = "TitleFeed">SHmoodle</h1>

  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success btn-outline-warning" type="submit">Search</button>
    </form>
  </div>

  <h1 class = "Title2Feed">Топ 3 курса за неделю</h1>


</div>
</template>

<style>
.container-fluid{
  position: absolute;
  top:43%;  
   left:22%; 
   width: 1000px;

}
.Title2Feed{
  font-size: 50px;
   position:absolute;               
   top:54%;  
   left:34.1%; 
   color:gold;
}
.TitleFeed{
  font-size: 100px;
   position:absolute;               
   top:22%;  
   left:35%; 
}

.feed{
    background-image: url("img2/5.jpg");
    background-size: cover;
    min-height: 1040px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: white;
    background-repeat: no-repeat;
}
nav .nav-link {
  color:black;
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