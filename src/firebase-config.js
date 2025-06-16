  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage"
  

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBAXRHAHtl5A0oDN9o61ZLgIKNIGPNRqhI",
    authDomain: "petheaven-19ab4.firebaseapp.com",
    projectId: "petheaven-19ab4",
    storageBucket: "petheaven-19ab4.appspot.com", // ✅ Corrected format
    messagingSenderId: "763396704395",
    appId: "1:763396704395:web:8345903bbd6a5f4f20ac8e",
    measurementId: "G-YV0288QE7E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  // ✅ Export auth and db so they can be used in other files
  export { auth, db, storage };
