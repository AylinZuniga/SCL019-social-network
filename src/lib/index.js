import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
 https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUvj7Ny-b2QLU57iZ_B0CP8gsezTwV75Q",
  authDomain: "social-network-949f0.firebaseapp.com",
  projectId: "social-network-949f0",
  storageBucket: "social-network-949f0.appspot.com",
  messagingSenderId: "499338039893",
  appId: "1:499338039893:web:7f04fc4790a65d8949fadc"
};

const app = initializeApp(firebaseConfig);
const db= getFirestore ()

// Initialize Firebase 
const auth = getAuth();


export const registerEvent = () => {
  const signupForm = document.querySelector('.registerForm');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm.email.value;
    const password = signupForm.password.value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log('User created: ', cred.user);
      signupForm.reset();
    })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });



    
  };
