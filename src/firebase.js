import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBqJgfvpABzj-PUP2P0nctmtgeehhAM6jI",
  authDomain: "projectme-270bb.firebaseapp.com",
  databaseURL: "https://projectme-270bb.firebaseio.com",
  projectId: "projectme-270bb",
  storageBucket: "",
  messagingSenderId: "1028675126605"
};

firebase.initializeApp(config);

export default firebase;
