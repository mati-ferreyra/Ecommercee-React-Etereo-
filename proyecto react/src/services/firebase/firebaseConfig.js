import { initializeApp } from "firebase/app";

import { getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCZYE_q6H5BAU2U-bvLu9m6piTOBUrXfhs",
  authDomain: "e-commerce-etereo.firebaseapp.com",
  projectId: "e-commerce-etereo",
  storageBucket: "e-commerce-etereo.appspot.com",
  messagingSenderId: "782687499",
  appId: "1:782687499:web:fee5edef63f4574ce2d60e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)