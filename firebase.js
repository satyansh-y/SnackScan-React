   
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBlPZVwmYMdxCAxUXzN2rUVpWnOnRF6iQQ",
    authDomain: "snackscan-22c01.firebaseapp.com",
    projectId: "snackscan-22c01",
    storageBucket: "snackscan-22c01.appspot.com",
    messagingSenderId: "896001408332",
    appId: "1:896001408332:web:e53d768e182b66820523e9",
    measurementId: "G-ZQ7RYEXQE7"
  })
  
  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // firebase.initializeApp(firebaseConfig);
  // const auth = firebase.auth();
  // Initialize Firebase
  export const auth = app.auth()
  export default app

