import {initializeApp} from 'firebase/app';
import {
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC53slCp1L_Xy-OV2zn_SgbNgQYHZ1L8ZY',
  authDomain: 'fir-rn-3d72b.firebaseapp.com',
  databaseURL: 'https://fir-rn-3d72b-default-rtdb.firebaseio.com',
  projectId: 'fir-rn-3d72b',
  storageBucket: 'fir-rn-3d72b.appspot.com',
  appId: '1:873494069021:android:28cc6c12d6d7d4c3ee6bf4',
  messagingSenderId: '873494069021',
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const firebaseDatabase = getDatabase(app);

export {auth, firebaseDatabase, createUserWithEmailAndPassword};
