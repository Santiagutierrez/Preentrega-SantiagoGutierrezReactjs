import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import firebaseConfig from './service/firebase/firebaseConfig'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {getProducts, getProductsById} from "./Mock/asyncMock"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROYECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREID
  };

  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)

  const productIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  // productIds.forEach((productId) => {
  //   getProductsById(productId)
  //     .then((product) => {
  //       db.collection("products").add(product)
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching product by ID:', error);
  //     });
  // });

  productIds.forEach((productId) => {
    getProductsById(productId)
      .then((product) => {
        return addDoc(collection(db, 'products'), product);  // Aquí pasamos 'product' en lugar de 'getProducts'
      })
      .then((docRef) => {
        console.log("Documento agregado con ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error al agregar el documento: ", error);
      });
  });
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
