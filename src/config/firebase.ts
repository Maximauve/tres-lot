// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAokeg8R9iYyTnfwgOKZ0RPb_Cm_R1tmgQ",
	authDomain: "tres-lot.firebaseapp.com",
	projectId: "tres-lot",
	storageBucket: "tres-lot.appspot.com",
	messagingSenderId: "138201779895",
	appId: "1:138201779895:web:b98eb53716cc232de38732",
	measurementId: "G-26JEJT8XJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default getFirestore(app);