export const start = () => {
  const startPage = document.createElement('main');
  startPage.className = 'start-section';
  startPage.id = 'start-section';
  const welcomePage = `


  <header class="title-menu">
  
 <div class="titleContainer">
   <h1 class="title">Together</h1>
  </div>
  
  </header>

 <div class="welcome">

 <section class= "img-section">
<img class="img-dancing" src="./imagenes/dancing.png" />
</section>

 <section class= "welcome-section">
 <p class="paragraph">Conoce amigos y gente nueva <br> para salir</p>
 <button name="button" id= "get-into" value ="ingresar">Comencemos!</button> 
 </section>

 </div>`;

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
