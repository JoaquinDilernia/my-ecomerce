import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App'
import './App.css'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAyOS25oc7sAfkDEkwugHad1VLweBRyUJY",
  authDomain: "ecomerce-react-51100.firebaseapp.com",
  projectId: "ecomerce-react-51100",
  storageBucket: "ecomerce-react-51100.appspot.com",
  messagingSenderId: "214336096850",
  appId: "1:214336096850:web:1bbb259ec0a27ffa1dad8b"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);