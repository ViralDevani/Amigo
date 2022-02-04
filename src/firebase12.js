import firebase, { firestore } from "firebase/app"
import "firebase/auth"
import "firebase/firebase-firestore"
const app = firebase.initializeApp({
  apiKey: "AIzaSyCWqAg5nbLxlv6xamlsjWFq_OdCCyXVJl4",
  authDomain: "amigo-10f85.firebaseapp.com",
  projectId: "amigo-10f85",
  storageBucket: "amigo-10f85.appspot.com",
  messagingSenderId: "1041074881281",
  appId: "1:1041074881281:web:c3674d43c2f35066b75100",
  measurementId: "G-V2V88M1YNJ"
})

export const auth = app.auth()
export default app
