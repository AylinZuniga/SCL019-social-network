 import { signIn, startGoogle } from '../lib/index.js';

export const login = () => {
  const loginPage = document.createElement('main');
  loginPage.className = 'login-page';
  loginPage.id = 'login-page';
  const usserLoginPage = `
    
<header class= "header-section">
<h1 class="title">Together</h1>
<img src="./imagenes/menuicon.png" class="menu-icon">
<!-- // <nav>
// <ul id="menu">
//   <li><a href="">Inicio</a></li>
//   <li><a href="">Perfil</a></li>
//   <li><a href="">Contacto</a></li>
// </ul>
// </nav> -->
</header>

<section class= "img-section">
<img class="img-skating" src="./imagenes/skating.png" />
</section>

    <section class= "form-section">
  <form id="login">
  <section class="login-user">
  <input type="email" id="emailUser" class="login-input" placeholder="Ingresa tu correo" required >
  <input type="password" id="passwordUser" class="login-input" placeholder="Ingresa tu contraseña" />
  <button type="button" name="btn-login" class="button-login" id="accessButton">
  Inicia Sesión</button>
  <section class="login-google">
  <p class="login-google">----- O -----</p>
  <img class="img-google" src="./imagenes/google.png" />
  <a id="googleButton" >Inicia sesión con Google</a>
    
  </button>
  </section>
  <section class="login-newAccount">
  <hr class="lines" />
  <p class="terms">¿No tienes una cuenta?</p>
  <a class="link-newAccount" href="#/register" id="checkUser">Regístrate</a>
  <hr class="lines" />
</section>
    
    </form>
    </section>
    `;

    const printPage = document.getElementById('root');
  printPage.innerHTML = usserLoginPage;

  printPage.querySelector('#checkUser').addEventListener('click', () => {
      window.location.hash = '#/register';
    });
    

// Evento para Ingresar
printPage
.querySelector('#accessButton')
.addEventListener('click', () => {
  const emailRegister = document.querySelector('#emailUser').value;
  const passwordRegister = document.querySelector('#passwordUser').value;
 signIn(emailRegister, passwordRegister);
});

 // Evento para ingresar con Google
 printPage
 .querySelector('#googleButton')
 .addEventListener('click', () => {
  startGoogle();
   // window.location.hash = "#/wallpage";
 });


  return printPage;
};
