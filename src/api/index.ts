import * as firebase from 'firebase/app';
import AuthService from './AuthService';
import FirestoreService from './FirestoreService';

import {
  FIREBASE_PROJECT_ID,
} from '@/constants';

export default firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: FIREBASE_PROJECT_ID,
  authDomain: `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com`,
  storageBucket: `${FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: '224276200138',
  appId: '1:224276200138:web:1b598b46d780a502785233',
});

export const authService = new AuthService();
export const contactsCollection = new FirestoreService('contacts');
