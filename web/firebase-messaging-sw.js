importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAmsj6Bxkv9uyPGgRW-qDWx4lj0hfTvKTk",
   authDomain: "kripo-f6018.firebaseapp.com",
   projectId: "kripo-f6018",
   storageBucket: "kripo-f6018.appspot.com",
   messagingSenderId: "735934649968",
   appId: "1:735934649968:web:801bcefebca5369c5b46b5",
   measurementId: "G-M96PZP1EGN"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});