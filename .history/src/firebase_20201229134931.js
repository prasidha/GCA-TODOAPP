import firebase from 'firebase'
const firebaseConfig = {
    apiKey:"AIzaSyA43gfQm586iKJvcnQiVHggqfVS1P9HjHo",
    authDomain:"todo-app-24bc3.firebaseapp.com" ,
    projectId: "todo-app-24bc3",
    storageBucket:"todo-app-24bc3.appspot.com",
    messagingSenderId:process.env.MESSAGING_SENDER_ID,
    measurementId: process.env.MEASUREMENT_ID

    
  API_KEY: ,
  AUTH_DOMAIN: ,
  PROJECT_ID: ,
  STORAGE_BUCKET: ,
  MESSAGING_SENDER_ID: ,
  APP_ID: "1:206195041807:web:07b9cbe149df24ce46a57a",
  MEASUREMENT_ID: "G-F758QM5YVW"
  };

  //initialize firebase APP

  const firebaseApp = firebase.initializeApp(firebaseConfig)
   const auth =  firebase.auth()
   const db = firebaseApp.firestore()

   export { db ,auth } ;