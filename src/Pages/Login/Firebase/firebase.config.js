console.log(process.env);
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;
// const firebaseConfig = {
//     apiKey: "AIzaSyC5cZEmb_T-WK2jP4tBAwL_lescbFfZvcY",
//     authDomain: "client-site-c4c0b.firebaseapp.com",
//     projectId: "client-site-c4c0b",
//     storageBucket: "client-site-c4c0b.appspot.com",
//     messagingSenderId: "1037243786529",
//     appId: "1:1037243786529:web:30a638b8ad7c3e16ffca60"
//   };