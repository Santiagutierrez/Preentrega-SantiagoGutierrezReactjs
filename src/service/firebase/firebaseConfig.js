import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import reportWebVitals from "../../reportWebVitals";
import {getProductsById} from "../../Mock/asyncMock"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_proyectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_messagingSenderId
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
