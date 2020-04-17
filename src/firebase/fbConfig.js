
import firebase from 'firebase/app';
import 'firebase/auth';        

import 'firebase/firestore'; 
var Config = {
    apiKey: "AIzaSyDj2MztMPpnNn0chSQE2rOKqegVRQvzLvA",
    authDomain: "pass-c8920.firebaseapp.com",
    databaseURL: "https://pass-c8920.firebaseio.com",
    projectId: "pass-c8920",
    storageBucket: "pass-c8920.appspot.com",
    messagingSenderId: "301115915912",
    appId: "1:301115915912:web:9aafe96ef51cba8d4ca93d",
    measurementId: "G-YCYHZW3PP3"
  };
  
if (!firebase.apps.length) {
  firebase.initializeApp(Config);
  }

  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase 