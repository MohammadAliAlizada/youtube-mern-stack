import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBATUhmgRvfrjxhpHHjvMK077rayeIYqiE",
    authDomain: "clone-ba547.firebaseapp.com",
    projectId: "clone-ba547",
    storageBucket: "clone-ba547.appspot.com",
    messagingSenderId: "501354032834",
    appId: "1:501354032834:web:26639d838f57a3b164955b"
};
firebase.initializeApp(firebaseConfig)

export default firebase.auth()