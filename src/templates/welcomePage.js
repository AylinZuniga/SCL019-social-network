export const start = () => {
  const startPage = document.createElement('main');
  startPage.className = 'start-section';
  startPage.id = 'start-section';
  const welcomePage = `
<header>
<h1></h1>
</header>
<section class= "welcome-section">
<p>Conoce amigos y gente nueva para salir</p>
<button name="button" id= "ingresar" value ="ingresar">Comencemos!</button> 
</section>`;

    
    const printPage= document.getElementById('container');
    printPage.innerHTML = welcomePage;

    return printPage;
}
