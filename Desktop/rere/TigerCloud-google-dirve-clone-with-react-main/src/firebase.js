import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const app = firebase.initializeApp({
  apiKey: "AIzaSyDjPWVE2vknt3Ld1cB_u6eu7VjR9aE3yyw",
  authDomain: "tiger-cloud-46f97.firebaseapp.com",
  databaseURL: "https://tiger-cloud-46f97-default-rtdb.firebaseio.com",
  projectId: "tiger-cloud-46f97",
  storageBucket: "tiger-cloud-46f97.appspot.com",
  messagingSenderId: "905774498684",
  appId: "1:905774498684:web:72b27d7679cb16e7639af9",
  measurementId: "G-5PWPMW0HC9"
})
// mail: tigercoder12@gmail.com
// const firebaseConfig = {
//   apiKey: "AIzaSyAR3EEjem71TWpSLs1V3MR6YIBWm-_7ID4",
//   authDomain: "tiger-cloud-eca30.firebaseapp.com",
//   databaseURL: "https://tiger-cloud-eca30-default-rtdb.firebaseio.com",
//   projectId: "tiger-cloud-eca30",
//   storageBucket: "tiger-cloud-eca30.appspot.com",
//   messagingSenderId: "572711175154",
//   appId: "1:572711175154:web:859d7f699e558453d3a16b",
//   measurementId: "G-7QT7GFD05R"
// };
 
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
