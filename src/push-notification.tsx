import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "458771071058",
    apiKey: "AIzaSyAZ5lW48JDtMgas0-jzKbnGKpoCKy8SLdI",
    appId: "1:458771071058:web:bdc8c1e911925050c1df8b",
    projectId: "pushy1-3d87b"
  });
}

export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      //console.log('Token:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
  }