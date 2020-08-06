importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "458771071058",
    apiKey: "AIzaSyAZ5lW48JDtMgas0-jzKbnGKpoCKy8SLdI",
    appId: "1:458771071058:web:bdc8c1e911925050c1df8b",
    projectId: "pushy1-3d87b"
});

const messaging = firebase.messaging();