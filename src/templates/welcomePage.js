export const start = () => {
  const startPage = document.createElement('main');
  startPage.className = 'start-section';
  startPage.id = 'start-section';
  const welcomePage = `
 <header class= "header-start">
 <h1>Together</h1>
 </header>
 <section class= "img-section">
<img class="img-dancing" src="./imagenes/dancing.png" />
</section>
 <section class= "welcome-section">
 <p>Conoce amigos y gente nueva para salir</p>
 <button name="button" id= "get-into" value ="ingresar">Comencemos!</button> 
 </section>`;

  const printPage = document.getElementById('root');
  printPage.innerHTML = welcomePage;

  printPage
    .querySelector('#get-into')
    .addEventListener('click', () => {
      window.location.hash = '#/login';
    });

  return printPage;
};

// Evento para ingresar
