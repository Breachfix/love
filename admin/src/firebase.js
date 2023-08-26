// Firebase v9+ modular imports
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAgr0FJ3Fu3hVGO4zv4ocTA1Uh1Att79RI",
  authDomain: "adminstorage-3213f.firebaseapp.com",
  projectId: "adminstorage-3213f",
  storageBucket: "adminstorage-3213f.appspot.com",
  messagingSenderId: "424143026621",
  appId: "1:424143026621:web:2e37708e45e0fa011ffad4",
  measurementId: "G-TGR9DJ9QKR"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = getStorage();

export default storage;


