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

       <div class="postAndWall">

         <div class="pic-publish">

            <section class"profilePic">
             <a href="#/"> <img src="./imagenes/profile.png" class="profilePic"></a>  
            </section>
        
           <div class="publishContainer">   
              <p class="questionP">¿Qué estas pensando?</p>
              <textarea name="postText" class="postText" id="postText"></textarea>
              <button class="publish">Publicar</button>
           </div>

         </div>

         <section class="wallPosts"> </section>

        </div>
    
    



    `;
    const printPage = document.getElementById('root');
    printPage.innerHTML = wallPageView;

    return printPage;
};