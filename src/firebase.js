import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAzokLRs7_gb-7rxL21hAMOtr5It7yFz8Q",
  authDomain: "tik-tok-clone-85389.firebaseapp.com",
  projectId: "tik-tok-clone-85389",
  storageBucket: "tik-tok-clone-85389.appspot.com",
  messagingSenderId: "531526019475",
  appId: "1:531526019475:web:bc1b60b6db71a15aaa6066",
  measurementId: "G-Y40MPD47Q4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db
