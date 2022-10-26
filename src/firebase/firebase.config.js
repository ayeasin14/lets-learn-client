// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvWim4qRFeHGNFHLf8kA4O9htdosJ7rPc",
    authDomain: "yeasin-teaching.firebaseapp.com",
    projectId: "yeasin-teaching",
    storageBucket: "yeasin-teaching.appspot.com",
    messagingSenderId: "826287213278",
    appId: "1:826287213278:web:75abc1890b97cafac4104f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;