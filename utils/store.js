import {initializeApp} from 'firebase/app'
import {collection, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBynpO6M7k4MtVe7qJi0IYnB8-UQW-uxqM",
    authDomain: "blogs-todo.firebaseapp.com",
    projectId: "blogs-todo",
    storageBucket: "blogs-todo.appspot.com",
    messagingSenderId: "930176384533",
    appId: "1:930176384533:web:8a72e4f44cd4bf46ac981c"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore()

const todoCollection = collection(db, "todos");

export {app,db, todoCollection};