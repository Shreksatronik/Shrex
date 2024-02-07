<template>
<div class = "feed">
    <nav class="nav">
  <a class="nav-link px-3" href="#">На главную</a>
  <a class="nav-link px-1" href="#">Подписки</a>
  <a class="nav-link" href="#">Созданные курсы</a>
</nav>

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
</template>

<style>
.feed{
    background-image: url("img2/2.png");
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
nav .navbar {
   align-items: center;
}
 
</style>