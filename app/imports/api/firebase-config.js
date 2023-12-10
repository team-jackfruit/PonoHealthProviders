// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAyUAkW1P7N50bUePLJQ61RP1rSJTBBOpc',
  authDomain: 'ponohealthproviders-80f16.firebaseapp.com',
  projectId: 'ponohealthproviders-80f16',
  storageBucket: 'ponohealthproviders-80f16.appspot.com',
  messagingSenderId: '424410526212',
  appId: '1:424410526212:web:3b4360c8a796ecbe58bb51',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
