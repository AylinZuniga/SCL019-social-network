import { addPost } from '../lib/index.js';
export const wall = () => {
    const wallPage = document.createElement('main');
    wallPage.className = 'wall-page';
    wallPage.id = 'wallPage';
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
              <button class="publish" id="publish">Publicar</button>
           </div>

         </div>

         <section class="wallPosts"> </section>

        </div>
    
    `;
    // wallPage.querySelector('#exitIcon').addEventListener('click', () => {
    //     logoutButton();
    //   });
    // Producto en desarrollo
    // Evento para guardar datos de post
    const newPost = wallPage.querySelector('#publish');
    newPost.addEventListener('click', () => {
        const inputPost = document.getElementById('postText').value;
        if (inputPost === '') {
            alert('Complete los campos vacios');
        } else {
            addPost(inputPost);
        }
        document.getElementById('postText').value = '';
    });



    const printPage = document.getElementById('root');
    printPage.innerHTML = wallPageView;

    // Evento para cerrar sesión
    printPage
    .querySelector('.exitIcon').addEventListener('click', () => {
    logOut();
  });

// Evento para guardar post
 //probandoo
    return printPage;

};