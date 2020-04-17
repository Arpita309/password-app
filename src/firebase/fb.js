import {Config}from './Config';
import firebase from 'firebase/app';
import 'firebase/auth';        

import 'firebase/firestore';   // for cloud firestore


if (!firebase.apps.length) {
    firebase.initializeApp(Config);
    }

    firebase.firestore().settings({ timestampsInSnapshots: true });

    export default firebase 