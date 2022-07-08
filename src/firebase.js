import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBNY0a8tfekKzYbALnqujcSFMSFeJ7ScaE",
    authDomain: "snapchat-clone-2-70f48.firebaseapp.com",
    projectId: "snapchat-clone-2-70f48",
    storageBucket: "snapchat-clone-2-70f48.appspot.com",
    messagingSenderId: "949949298204",
    appId: "1:949949298204:web:660dbefa0fe774a2ca91d9"
};

const firebaseApp =firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth=firebase.auth()
const storage=firebase.storage()
const provider= new firebase.auth.GoogleAuthProvider()

export{db, auth, storage, provider }

