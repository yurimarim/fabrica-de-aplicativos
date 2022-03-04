import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBARx5UCq5HFbttxZGOI6oXLzZhR_9EOA4',
  authDomain: 'myapp-firebasemodule.firebaseapp.com',
  databaseURL: 'https://myapp-firebasemodule-default-rtdb.firebaseio.com',
  projectId: 'myapp-firebasemodule',
  storageBucket: 'myapp-firebasemodule.appspot.com',
  messagingSenderId: '906431614865',
  appId: '1:906431614865:web:97b913afa60f5b9014d430',
  measurementId: 'G-R5ED9LL25S'
}

// Initialize Firebase
if (!firebase.apps.length) {
  // Open connection
  firebase.initializeApp(firebaseConfig)
}

export default firebase
