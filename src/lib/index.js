/* eslint-disable import/no-unresolved */
import { printPosts } from '../templates/post.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  Timestamp,
  query,
  getDoc,
  updateDoc,
  increment,
  doc,
  orderBy,
  where,
  deleteDoc,
  arrayUnion,
  arrayRemove,
}
  from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
  //  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
}
  from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';



// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBUvj7Ny-b2QLU57iZ_B0CP8gsezTwV75Q",
  authDomain: "social-network-949f0.firebaseapp.com",
  projectId: "social-network-949f0",
  storageBucket: "social-network-949f0.appspot.com",
  messagingSenderId: "499338039893",
  appId: "1:499338039893:web:7f04fc4790a65d8949fadc"
};//guarda la info del proyecto

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);//constante que guarda la base de datos
export const auth = getAuth(app);    // Initialize Firebasegit
export const user = auth.currentUser;// autentifica el usuario



// Registrarse
export const registerEvent = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log('User created: ', cred.user);

      window.location.hash = '#/wall';
      // emailCheck();
    })

    .catch((err) => {
      console.log(err.message);
      alert(err.message);

    });
  // const emailCheck = () => {
  //   sendEmailVerification(user)
  //     .then(() => {
  //       // Email verification sent!
  //       console.log('Correo enviado');
  //       alert('Hemos enviado un correo de verificación para validar tu cuenta');

  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
};

// Iniciar sesión con correo registrado
export const signIn = (emailRegister, passwordRegister) => {
  signInWithEmailAndPassword(auth, emailRegister, passwordRegister)
    .then((userCredential) => {
      // Signed in
      console.log("userCredential", userCredential)

      const { user } = userCredential;// le estamos dando el valor de usercredential 
      console.log(user);
    
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


//iniciar sesion con google
export const checkGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(() => {

      window.location.hash = '#/wall';


    })
};

// Cerrar sesión
export const logOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('cierre de sesión exitoso');
      window.location.hash = '#/login';
    })
    
};

// guardar datos post
export const addPost = async (description) => {            // Add a new document with a generated id.

  const date = Timestamp.fromDate(new Date());
  const name = auth.currentUser.displayName;
  const userId = auth.currentUser.uid;
  const likes = [];
  const likesCounter = 0;
  await addDoc(collection(db, 'posts'), { description, date, name, userId, likes, likesCounter }); //guardamos la coleccion post 
};



// Leer datos de post
export const readPost = () => {

  const q = query(collection(db, 'posts'), orderBy('date', 'desc'));//query consulta la base de datos de firebase

  onSnapshot(q, (querySnapshot) => { //onSnapshot escucha los elementos del documento 
    const boxPost = [];
    querySnapshot.forEach((doc) => { //QuerySnapshot accede a los objetos que llama de doc por medio del array
      console.log('documentos', doc)
      boxPost.push({
        id: doc.id,
        datepost: Date.now(),
        data: doc.data(),
        description: doc.data().description,
        date: doc.data().date,
        likes: [],
        likesCounter: 0
      });
    });
    printPosts(boxPost);
    return boxPost;
  });
};


// Borrar datos
export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
  console.log(await deleteDoc);
};

// Editar datos
export const editPost = async (id, description) => {
  const refreshPost = doc(db, 'posts', id);
  await updateDoc(refreshPost, {
    description: description,
  });
};
// Dar likes y contador de likes
export const likePost = async (id, userLike) => {
  const likeRef = doc(db, 'posts', id);//accediendo a la colleccion de los posts
  const docSnap = await getDoc(likeRef);//estamos trayendo un post especifico con getDoc
  const postData = docSnap.data();//nos permite agregar esta nueva data a cualquier elemneto de Dom
  const likesCount = postData.likesCounter;

  if (postData.likes.includes(userLike)) {
    await updateDoc(likeRef, {
      likes: arrayRemove(userLike),
      likesCounter: likesCount - 1,
    });
  } else {
    await updateDoc(likeRef, {
      likes: arrayUnion(userLike),
      likesCounter: likesCount + 1,
    });
  }
};



