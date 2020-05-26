import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGdj5yQ7LZunRG6S8VOpu-5s_9IDIIR0Q",
    authDomain: "react-my-recipe-page.firebaseapp.com",
    databaseURL: "https://react-my-recipe-page.firebaseio.com",
    projectId: "react-my-recipe-page",
    storageBucket: "react-my-recipe-page.appspot.com",
    messagingSenderId: "871491891265",
    appId: "1:871491891265:web:f855c495483621ed4516c0",
    measurementId: "G-VSH4VSHE6Z"
  };
  const fire= firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;
