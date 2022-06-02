import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBpXlJuFRb44xmsrgnaBr_mWXEfmHaxtZ4",
  authDomain: "blog-vue-5d7a5.firebaseapp.com",
  projectId: "blog-vue-5d7a5",
  storageBucket: "blog-vue-5d7a5.appspot.com",
  messagingSenderId: "467234463590",
  appId: "1:467234463590:web:8e305e4935b82ad91232a7"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore
const projectFirestore = firebase.firestore()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }