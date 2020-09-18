import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCg3_KvO70bkcD9jM4P4_V_zg_Ygw8EnxU",
  authDomain: "firegram-37f97.firebaseapp.com",
  databaseURL: "https://firegram-37f97.firebaseio.com",
  projectId: "firegram-37f97",
  storageBucket: "firegram-37f97.appspot.com",
  messagingSenderId: "802061447412",
  appId: "1:802061447412:web:5b23513766aaeba0606ea1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectStorage, projectFirestore, timestamp };
