export const wall = () => {
    const registerPage = document.createElement('main');
    registerPage.className = 'wall-page';
    registerPage.id = 'wallPage';
    const wallPageView = `
    <header class="wallHeader">
     <div>
        <h1 class="title">Together</h1>
        <a href="#/"> <img src="./imagenes/exit.png" class="exitIcon"></a>
     </div>
    </header>



    `;
    const printPage = document.getElementById('root');
    printPage.innerHTML = wallPageView;

    return printPage;
};