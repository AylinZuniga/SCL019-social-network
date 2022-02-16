export const start = () => {
    const startPage = document.createElement('main');
    startPage.className = 'start-section';
    startPage.id = 'start-section';
    const welcomePage = `
    <section class= "welcome-section">
    <h1>Let's Meet!</h1>
    <p>Conoce amigos y gente nueva para salir</p>
    <button name="button" id= "ingresar" value ="ingresar">Comencemos!</button>`

    startPage.innerHTML = welcomePage;
}
return start