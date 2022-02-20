export const register = () => {
  const registerPage = document.createElement('main');
  registerPage.className = 'register-page';
  registerPage.id = 'registerPage';
  const registerView = `
  <div class="grid-top">
  <header>
  <h1>Together</h1>
  <nav>
  <ul id="menu">
    <li><a href="">Inicio</a></li>
    <li><a href="">Perfil</a></li>
    <li><a href="">Contacto</a></li>
  </ul>
  </nav>
  <header>
  </div>
  <section class="register-section">
  <img src="./imagenes/hanging.png"class="img-hanging">
  <div class="white-section">
  <form id="form-register">
   <section id="form-inputs" class="register-inputs">
    <input type="name" id="registerName" class="registerInput" placeholder="  Ingresa tu nombre" />
    <input type="email" id="registerEmail" class="registerInput" placeholder="  Ingresa tu correo" required >
    <input type="password" id="registerPassword" class="registerInput" placeholder="  Ingresa tu contraseña" />
    <input type="password" id="confirmPassword" class="registerInput" placeholder="  Repite tu contraseña" />
    <button type="button" name="btn-register" class="buttonRegister" id="registerButton">
        Regístrate</button>
  </section>
  </form>
 
  <section class="grid-bottom"> 
  <p class="terms">¿Ya tienes cuenta?</p>
  <a class="link-login" id="linkLogin" href="#/login" id= "checkUser">Inicia sesión</a>

 </section>
  </div>
  </section>`;


  const printPage = document.getElementById('root');
  printPage.innerHTML = registerView;

  return printPage;
};
