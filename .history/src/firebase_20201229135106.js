import firebase from 'firebase'
const firebaseConfig = {
    apiKey:,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket:process.env.STORAGE_BUCKET,
    messagingSenderId:process.env.MESSAGING_SENDER_ID,
    appid:process.env.APP_ID
    measurementId: process.env.MEASUREMENT_ID

    
  API_KEY: "AIzaSyA43gfQm586iKJvcnQiVHggqfVS1P9HjHo",
  AUTH_DOMAIN: "todo-app-24bc3.firebaseapp.com",
  PROJECT_ID: "todo-app-24bc3",
  STORAGE_BUCKET: "todo-app-24bc3.appspot.com",
  MESSAGING_SENDER_ID: "206195041807",
  APP_ID: "1:206195041807:web:07b9cbe149df24ce46a57a",
  MEASUREMENT_ID: "G-F758QM5YVW"
  };

  //initialize firebase APP

  const firebaseApp = firebase.initializeApp(firebaseConfig)
   const auth =  firebase.auth()
   const db = firebaseApp.firestore()

   export { db ,auth } ;