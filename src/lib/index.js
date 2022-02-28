/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import {
  getAuth, 
  createUserWithEmailAndPassword, 
  signOut,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   GoogleAuthProvider,
   getRedirectResult,
  signInWithRedirect,
  sendEmailVerification,
} 
from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { initializeApp } from '../../node_modules/firebase/app';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBUvj7Ny-b2QLU57iZ_B0CP8gsezTwV75Q',
  authDomain: 'social-network-949f0.firebaseapp.com',
  projectId: 'social-network-949f0',
  storageBucket: 'social-network-949f0.appspot.com',
  messagingSenderId: '499338039893',
  appId: '1:499338039893:web:7f04fc4790a65d8949fadc',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

// Initialize Firebase
const auth = getAuth();

// Registrarse
export const registerEvent = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log('User created: ', cred.user);

      window.location.hash = '#/wall';
      emailCheck();
    })
   
    .catch((err) => {
      console.log(err.message);
      alert(err.message);
    
    });
    const emailCheck = () => {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          // Email verification sent!
          console.log('Correo enviado');
          alert('Hemos enviado un correo de verificación para validar tu cuenta');
        })
        .catch((error) => {
          console.log(error);
        });
    };
};

// Iniciar sesión con correo registrado
export const signIn = (emailRegister, passwordRegister) => {
  signInWithEmailAndPassword(auth, emailRegister, passwordRegister)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      console.log(user);
      // ...
      window.location.hash = '#/wall';
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      alert('Correo o contraseña inválidos');
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  };


  export const loginWithGoogle = () => {
    getRedirectResult(auth)
      .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
  
        // The signed-in user info.
        const user = result.user;
        console.log(token, user);
      }).catch((error) => {
      // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      // ...
      });
  };

  // autentifizacion de cambios de estado
const provider = new GoogleAuthProvider();

export const startWithGoogle = () => {
  signInWithRedirect(auth, provider);
  window.location.hash = '#/wall';
};
onAuthStateChanged(auth, (user) => {
  console.log('user status changed:', user);
  //checkgoogle(auth);
});

//   // Iniciar sesión con Google
// export const loginWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access Google APIs.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       console.log(token);
//       // The signed-in user info.
//       const user = result.user;
//       console.log(user);
//       console.log('Inicio de sesión con Google');
//       window.location.hash = '#/wall';
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       console.log(errorCode);
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       console.log(email);
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       console.log(credential);
//       // ...
//       console.log(errorMessage);
//     });
// };
  
// export const logoutButton = () => {
//   const logoutForm = document.querySelector('#login');
//   logoutForm.addEventListener('submit', (e) => {
//     signOut(auth)
//       .then((cred) => {
//         console.log('the user signed out');
//       })

//       .catch((err) => {
//         console.log(err.message);
//         alert(err.message);
//       });
//   });
// };

// export const loginForm = () => {
//   const loginForm = document.querySelector('#login');
//   loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const email = loginForm.email.value;
//     const password = loginForm.password.value;
//     signInWithEmailAndPassword(auth, email, password)
//       .then((cred) => {
//         console.log('User logged in ', cred.user);
//         loginForm.reset();
//       })
//       .catch((err) => {
//         console.log(err.message);
//         alert(err.message);
//       });
//   });
// };

