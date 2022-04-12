import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBEan6FPOcQLrlnZqz9wWO5tZXwdMzjVXs",
  authDomain: "cart-c00d4.firebaseapp.com",
  projectId: "cart-c00d4",
  storageBucket: "cart-c00d4.appspot.com",
  messagingSenderId: "139218052053",
  appId: "1:139218052053:web:02e4e33e1d016227f5535c"
};

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


