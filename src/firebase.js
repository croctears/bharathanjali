import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDy5tvv7h95QVbr0PsPBiCJAwFtAmKUZrE',
  authDomain: 'bharathanjali-4fd59.firebaseapp.com',
  projectId: 'bharathanjali-4fd59',
  storageBucket: 'bharathanjali-4fd59.appspot.com',
  messagingSenderId: '37287114989',
  appId: '1:37287114989:web:f57276598811d4830bf4e4',
  measurementId: 'G-10D3FRV96P',
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

export { firebase, db };
