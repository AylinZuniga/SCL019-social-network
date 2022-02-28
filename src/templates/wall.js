export const wall = () => {
    const registerPage = document.createElement('main');
    registerPage.className = 'wall-page';
    registerPage.id = 'wallPage';
    const wallPageView = `

<p> Ingresaste al muro! </p>
    `;
    const printPage = document.getElementById('root');
    printPage.innerHTML = wallPageView;

    return printPage;
};