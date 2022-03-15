import { addPost, logOut } from '../lib/index.js';
import { printPosts } from '../lib/post.js';

export const wall = () => {
  const wallPage = document.createElement('main');
  wallPage.className = 'wall-page';
  wallPage.id = 'wallPage';
  const wallPageView = `
     
       <header class="title-menu">

          <div class="titleContainer">
            <h1 class="title">Together</h1>
          </div>
     
          <div class="homeContainer">
            <a class="iconContainer" href="#/"> <img src="./imagenes/exit.png" class="exitIcon"></a>
          </div>
     
       </header>

       <div class="postAndWall">

           <div class="pic-publish">

                <section class"profilePicContainer">
                 <a href="#/"> <img src="./imagenes/profile.png" class="profilePic"></a>  
                </section>
        
                <form class="publishContainer" id="formPublish">   
                    <p class="questionP">¿Qué estas pensando?</p>
                    <textarea name="postText" class="postText" id="postText"></textarea>
                    <button type="submit" class="publish" id="publish">Publicar</button>
                </form>

            </div>

            <div class="wallPostsContainer">
                <section class="wallPosts"> </section>
            </div>


        </div>
    
    `;



  // Evento para guardar datos de post
  const printPage = document.getElementById('root');
  printPage.innerHTML = wallPageView;



  const newPost = printPage.querySelector('#formPublish');
 
  newPost.addEventListener('submit',async (e) => {
    e.preventDefault();
    const inputPost = document.getElementById('postText').value;
  
    await addPost(inputPost);
    console.log(addPost)
    console.log(newPost)
    publishContainer.reset;
  });





  // Evento para cerrar sesión
  printPage.querySelector('.exitIcon').addEventListener('click', () => {
    logOut();
  });

  // Evento para guardar post
  //probandoo
  return printPage;


  // evento imprimir post
  // containerWall.querySelector('#logout').addEventListener('click', () => {
  //   printPosts();
  // });

};