import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'


const app = firebase.initializeApp({
  apiKey: "AIzaSyCCFCnb6QUts5w5IvXesRPDpDjXIPL7saQ",
  authDomain: "thetigercloud-95e33.firebaseapp.com",
  databaseURL: "https://thetigercloud-95e33-default-rtdb.firebaseio.com",
  projectId: "thetigercloud-95e33",
  storageBucket: "thetigercloud-95e33.appspot.com",
  messagingSenderId: "171871673881",
  appId: "1:171871673881:web:eaa1300dfa16feac355488",
  measurementId: "G-76TVH8710S"
})


// true code 
// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID,


const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
