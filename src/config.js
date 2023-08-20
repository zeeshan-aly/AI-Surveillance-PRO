import firebase from 'firebase';
import 'firebase/auth';

const config = firebase.default.initializeApp({
    //     apiKey: "AIzaSyA_kq7aSBICUn42RB3VPnPnrpZtCLNvtAs",
    //     authDomain: "god-s-eye-b94dc.firebaseapp.com",
    //    // databaseURL: "https://god-s-eye-b94dc-default-rtdb.firebaseio.com",
    //     projectId: "god-s-eye-b94dc",
    //     storageBucket: "god-s-eye-b94dc.appspot.com",
    //     messagingSenderId: "87925896858",
    //     appId: "1:87925896858:web:299a3e05e7850651fb1123",
    //     measurementId: "G-126PWQ4RL1"
    apiKey: "AIzaSyCoxYJk_78kRfEAue3XM_yGKsoMuyUdlyE",
    authDomain: "godseye2.firebaseapp.com",
    databaseURL: "https://godseye2-default-rtdb.firebaseio.com/",
    projectId: "godseye2",
    storageBucket: "godseye2.appspot.com",
    messagingSenderId: "988541744504",
    appId: "1:988541744504:web:e5a2ecb5553a7bf7bd848d",
    measurementId: "G-W8H1B0XCN2"
});

export const auth = firebase.auth();
export default config;
