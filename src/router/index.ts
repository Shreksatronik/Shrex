import { createRouter, createWebHashHistory,} from "vue-router";
import {getAuth,onAuthStateChanged} from "firebase/auth";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: ()=> import ("../components/Home.vue")},
    { path: "/register", component: ()=> import ("../views/Register.vue")},
    { path: "/sign-in", component: ()=> import ("../views/SignIn.vue")},
    {path: "/add-courses", 
    component: ()=> import ("../views/AddCourses.vue"),
    meta:{
     requiresAuth: true,
    },
    },
    {path: "/my-courses", 
    component: ()=> import ("../views/MyCourses.vue"),
    meta:{
     requiresAuth: true,
    },
    },
    {path: "/all-courses", 
    component: ()=> import ("../views/AllCourses.vue"),
    meta:{
     requiresAuth: true,
    },
    },
    {path: "/user-page", 
    component: ()=> import ("../views/UserPage.vue"),
    meta:{
     requiresAuth: true,
    },
    },
    { 
      path: "/feed", 
      component: ()=> import ("../views/Feed.vue"),
      meta:{
       requiresAuth: true,
      },
     },
    ],
});
const getCurrentUser = () => {
  return new Promise((resolve,reject)=>{
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user)=>{
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async(to,from,next)=> {
  if(to.matched.some((record)=> record.meta.requiresAuth)){
    if(await getCurrentUser()){
      next();
    }else{
      alert("you dont have access!");
      next("/");
    }
  }else{
    next();
  }
});
export default router;

