import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDrgSJ49qK3Dfl40KVFZGFPL8eEyYEfzec",
  authDomain: "crud-70688.firebaseapp.com",
  projectId: "crud-70688",
  storageBucket: "crud-70688.firebasestorage.app",
  messagingSenderId: "480631098333",
  appId: "1:480631098333:web:9eb4e2f391cfc797a34434",
  measurementId: "G-D3S1MK1D7G"
};

//inicializando o firebase
  const app = initializeApp(firebaseConfig);
//inicializando o firestore e analytics
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };

