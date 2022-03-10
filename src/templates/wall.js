export const wall = () => {
    const registerPage = document.createElement('main');
    registerPage.className = 'wall-page';
    registerPage.id = 'wallPage';
    const wallPageView = `
       <header class="wallHeader">
        <div class="wallHeaderContainer">
            <h1 class="wallTitle">Together</h1>
            <a href="#/"> <img src="./imagenes/exit.png" class="exitIcon"></a>
        </div>
       </header>

       <section class"profilePic">
        <a href="#/"> <img src="./imagenes/profile.png" class="profilePic"></a>  
       </section>

       <div class="publishContainer">
         <p class="questionP">¿Qué estas pensando?</p>
         <textarea name="postText" class="postText"></textarea>
         <button class="publish">Publicar</button>
        </div>

        <section class="wallPosts"> </section>
  
    
    



    `;
    const printPage = document.getElementById('root');
    printPage.innerHTML = wallPageView;

    return printPage;
};