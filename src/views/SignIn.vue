<template>
    <div class="signin">
        <div class="card" style="width: 30rem; height: 45rem;">
        <h1 class="Maintitle">SHmoodle</h1>
    <p class="email"><input type ="text" class= "form-control"  placeholder = "Email" v-model="email" id="email" required/></p>
    <p class="password"><input type ="password" class= "form-control" placeholder = "Password" v-model="password" id="password"/></p>
    <p v-if = "errMsg">{{ errMsg }}</p>
    <button class ="SubmitBtn" @click="register">Submit</button>
    <h5 class="notReg">Еще не зарегестрированы?</h5>
    <router-link class ="notRegLink" to="/register">Register</router-link>
    </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useRouter} from 'vue-router';

const email = ref("");
const password = ref("");
const errMsg = ref('');
const router = useRouter()
const register = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data)=> {
        console.log("Successfully signed in!");
        console.log(auth.currentUser);
        router.push('/feed');

    })
    .catch((error)=>{
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-credential":
                errMsg.value="Invalid email or password";
                break;
        }
    });
};
</script>

<style>
.card{
    position: absolute;
    left:35%;
    right:0;
    top:10%;
    border-radius: 10%;
    background-color: #d9d9d9a1;
}
.signin{
    background-image: url("img2/5.jpg");
    background-size: cover;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    height: 1024px;
    color: white;
    background-repeat: no-repeat;
}
.Maintitle{
  font-size: 400%;
  text-align: center;
  position: absolute;
  top:15%;
  left:0;
  right:0;
}
.email{
    position: absolute;
    top:35%;
    left:12%;
    width:368px;
}
.password{
    position: absolute;
    top:45%;
    left:12%;
    width:368px;
    
}
.SubmitBtn{
    position: absolute;
    top:55%;
    left:28%;
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
.SubmitBtn:hover{
  transform: translate(0,-3px);
  box-shadow: 0 20px 40px 0 rgb(199, 199, 199);
}
.notReg{
    position: absolute;
    font-size: 19px;
    width: 300px;
   height: 900px;
   top:92%;
    left:10%;
}
.notRegLink{
    position: absolute;
    color:white;
    font-size: 19px;
    width: 300px;
   height: 900px;
   top:91.6%;
    left:44%;
}
</style>