
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA61dIJKBkcXqt5_gbcapLA520hTvUz2uw",
    authDomain: "zcrud-9f862.firebaseapp.com",
    databaseURL: "https://zcrud-9f862.firebaseio.com",
    projectId: "zcrud-9f862",
    storageBucket: "",
    messagingSenderId: "798326242491",
    appId: "1:798326242491:web:0cf9a0161deaafb5"
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);

export default fireBaseApp.firestore();
