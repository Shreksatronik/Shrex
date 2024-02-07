import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxjZQLR8RulMijz18mXDFDcEu7tU19drs",
  authDomain: "diplom-e38fc.firebaseapp.com",
  projectId: "diplom-e38fc",
  storageBucket: "diplom-e38fc.appspot.com",
  messagingSenderId: "708608281168",
  appId: "1:708608281168:web:e77cab6d95471b192d5f55"
};

// Initialize Firebase
initializeApp(firebaseConfig);
createApp(App).use(store).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.js"