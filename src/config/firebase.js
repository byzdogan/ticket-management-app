// // Import the functions you need from the SDKs you need
// import { getStorage } from 'firebase/storage'
// import { initializeApp } from 'firebase/app'
// // import { getAnalytics } from 'firebase/analytics'
// import { getAuth } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyB2qLco_jk0cbq_dZ0D2kOP_KE8lBm_xlw',
//   authDomain: 'ticket-management-a842c.firebaseapp.com',
//   projectId: 'ticket-management-a842c',
//   storageBucket: 'ticket-management-a842c.appspot.com',
//   messagingSenderId: '806399026222',
//   appId: '1:806399026222:web:6d7f319dad9f840cb6abbf',
//   measurementId: 'G-CE7WBXYM4Y',
// }
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBmzHqtg_3swch_MdvlPIRJhClkZthy_sc',
  authDomain: 'ticket-management-app-e57fe.firebaseapp.com',
  projectId: 'ticket-management-app-e57fe',
  storageBucket: 'ticket-management-app-e57fe.appspot.com',
  messagingSenderId: '280643475681',
  appId: '1:280643475681:web:edac22ea9a582b7a673fa0',
  measurementId: 'G-E5TQGHZ058'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
// Initialize Firebase
// const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
// const analytics = getAnalytics(app)
