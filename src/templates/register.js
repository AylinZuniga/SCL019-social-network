export const register = () => {
  const registerPage = document.createElement('main');
  registerPage.className = 'register-section';
  registerPage.id = 'register-section';
  const registerView = `
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
 
    
     `;

  const printPage = document.getElementById('container');
  printPage.innerHTML = registerView;

  return printPage;
};
