import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestone'

const firebaseConfig = {
    apiKey: "AIzaSyDuBseTCwSLWUAu5cOS0tSaF83yl6PkVrc",
    authDomain: "proyecto-final-reactjs-e04c8.firebaseapp.com",
    projectId: "proyecto-final-reactjs-e04c8",
    storageBucket: "proyecto-final-reactjs-e04c8.appspot.com",
    messagingSenderId: "87023639901",
    appId: "1:87023639901:web:67189fd43cb8185651dcb4"
  };

  const app = initializeApp(firebaseConfig)


  export const db = getFirestore(app)