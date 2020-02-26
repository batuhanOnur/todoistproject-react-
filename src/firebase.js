import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyDx3pErc27lG_sekFeMrg_ycaWQPbgYRNI",
    authDomain: "todoist-tut-74c26.firebaseapp.com",
    databaseURL: "https://todoist-tut-74c26.firebaseio.com",
    projectId: "todoist-tut-74c26",
    storageBucket: "todoist-tut-74c26.appspot.com",
    messagingSenderId: "517606396691",
    appId: "1:517606396691:web:46af47805e3b760ac900e6"


});

export { firebaseConfig as firebase };