// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeABUMeF4Jfb9pUqWRVsE-TRmttyVh3pE",
  authDomain: "assignment-10-540ff.firebaseapp.com",
  projectId: "assignment-10-540ff",
  storageBucket: "assignment-10-540ff.appspot.com",
  messagingSenderId: "743944497756",
  appId: "1:743944497756:web:a21b9e1237a724ca9dd499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;