export const register = () => {
  const registerPage = document.createElement('main');
  registerPage.className = 'start-section';
  registerPage.id = 'start-section';
  const registerView = `
      <section class= "welcome-section">
      <h1>Let's Meet!</h1>
      <p>Conoce amigos y gente nueva para salir</p>
      <button name="button" id= "ingresar" value ="ingresar">Comencemos!</button>`;

  const printPage = document.getElementById('container');
  printPage.innerHTML = registerView;

  return printPage;
};
