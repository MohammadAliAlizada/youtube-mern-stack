import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
// const firebaseConfig = {
//     apiKey: "AIzaSyBATUhmgRvfrjxhpHHjvMK077rayeIYqiE",
//     authDomain: "clone-ba547.firebaseapp.com",
//     projectId: "clone-ba547",
//     storageBucket: "clone-ba547.appspot.com",
//     messagingSenderId: "501354032834",
//     appId: "1:501354032834:web:26639d838f57a3b164955b"
// };
const firebaseConfig = {
    apiKey: "AIzaSyCchD_bUjE4TGVLr6QcgHcOnT1SgrtPmX0",
    authDomain: "my--clone-f9269.firebaseapp.com",
    projectId: "my--clone-f9269",
    storageBucket: "my--clone-f9269.appspot.com",
    messagingSenderId: "173628160672",
    appId: "1:173628160672:web:4f4488f157bf553757a7c5",
    measurementId: "G-RNCHZ0RC2X"
};
firebase.initializeApp(firebaseConfig)

export default firebase.auth()