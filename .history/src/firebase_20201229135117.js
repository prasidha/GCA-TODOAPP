import firebase from 'firebase'
const firebaseConfig = {
    apiKey:,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket:process.env.STORAGE_BUCKET,
    messagingSenderId:process.env.MESSAGING_SENDER_ID,
    appid:process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID

    
 
  };

  //initialize firebase APP

  const firebaseApp = firebase.initializeApp(firebaseConfig)
   const auth =  firebase.auth()
   const db = firebaseApp.firestore()

   export { db ,auth } ;