import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import reportWebVitals from "../../reportWebVitals";
import {getProductsById} from "../../Mock/asyncMock"

const firebaseConfig = {
    apiKey: "AIzaSyBMhGoYZowkTVEc8xWFR2uTKnNXWTcI2CE",
    authDomain: "ecommerce-coderhouse-38ef3.firebaseapp.com",
    projectId: "ecommerce-coderhouse-38ef3",
    storageBucket: "ecommerce-coderhouse-38ef3.appspot.com",
    messagingSenderId: "14424326443",
    appId: "1:14424326443:web:30d35582ad90242509c56e",
    measurementId: "G-3BBTJZ3KMH"
  };


  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)

  //const productIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  //productIds.forEach((productId) => {
    //getProductsById(productId)
      //.then((product) => {
        // Aquí puedes agregar el producto a la base de datos
      //})
      //.catch((error) => {
        //console.error('Error fetching product by ID:', error);
      //});
  //});

  reportWebVitals();
