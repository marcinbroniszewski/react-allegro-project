import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCPa00moc251Am4g1tksUquzrYiuWhuBxg",
  authDomain: "allegro-642ad.firebaseapp.com",
  projectId: "allegro-642ad",
  storageBucket: "allegro-642ad.appspot.com",
  messagingSenderId: "609854136437",
  appId: "1:609854136437:web:83af6ebfc91f6cf71d983c"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
