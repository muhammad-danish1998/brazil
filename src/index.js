import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Global.css'
import { BrowserRouter } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCyYiJaCrxoyHqZ4oXZyWUuKw2ecmcyNMg",
    authDomain: "brazil-cabc2.firebaseapp.com",
    projectId: "brazil-cabc2",
    storageBucket: "brazil-cabc2.appspot.com",
    messagingSenderId: "44840433713",
    appId: "1:44840433713:web:498f1e8fb2bd1d4ec0bd10",
    measurementId: "G-4CDL2J6ZNC"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

