import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where, limit } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getProducts = (key, operator, value) =>{
  return new Promise((resolve, reject) =>{
    const collectionQuery = key && operator && value ?
    query(collection(db, 'items'), where(key, operator, value), limit(20)):
    collection(db, 'items')

    getDocs(collectionQuery).then((querySnapshot) =>{
      const products = querySnapshot.docs.map((doc) =>{
        return {id: doc.id, ...doc.data()}
      })
      resolve(products)
    }).catch(error=>{
      reject('Error obteniendo productos: ',error)
    })
  })
}
