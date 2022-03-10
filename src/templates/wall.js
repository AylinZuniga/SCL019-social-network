export const wall = () => {
    const registerPage = document.createElement('main');
    registerPage.className = 'wall-page';
    registerPage.id = 'wallPage';
    const wallPageView = `

    <header class="title-register">
    <div class="titleContainer">
    <h1 class="title">Together</h1>
   </div>
  
      
  
       <a href="#/"> <img src="./imagenes/casa.png" class="menu-register"></a>
    
  
    </header>
    


    `;
    const printPage = document.getElementById('root');
    printPage.innerHTML = wallPageView;

    return printPage;
};