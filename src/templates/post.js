//Función para imprimir posts
export const printPosts = (array) => {
    const containerEmpty = document.querySelector('#wallPosts');
    containerEmpty.innerHTML = '';
    const viewPost = (element) => {
      const postView = `
        <div id="postContainer" class="postContainer">

         <div class="postUserMenu">

            <div class="user-post">
            <p class="img-user2-p">${element.data.name}</p>
            </div>
            <div class="img-meatballs">
            <img class="like-post" src="./imagenes/meatballs.png" />
            </div>
           
         </div>
           <div class="text-like">
         
            <div class="post-buttons">
            <textarea id="writePost-${element.id}" class="review-post2" readonly> ${element.data.description} </textarea>
            </div>
            <div class="buttons">
            <button class="btn-like" value='${element.id}'><img class="like-post" src="./imagenes/like.png" />${element.data.likesCounter}</button>
            </div>
            
           </div>
        </div>
          `;
        
          // let userEdit= '';
          //  if (element.data.userId === auth.currentUser.uid) {
          //    boxEmptyThree = `
          //        <div class="edit-post">
          //       <button id="btnImagePost" class="btn-image"> <img class="image-post" src="./imagenes/icons8imagen.png" /></button>
          //        <button class="btn-pencil" value='${element.id}' > <img class="pencil-post" src="./imagenes/icons8lapiz.png" /> Editar</button>
          //        <button class="btn-trash" id="btnTrash" value='${element.id}' > <img class="trash-post" src="./imagenes/icons8eliminar.png" /> Eliminar</button>
          //        <button class="btn-save" id='mr-${element.id}-save'>Guardar</button>
          //        </div>
          //        `;
          //  }

           containerEmpty.innerHTML += postView ;
     }
  

    array.forEach(viewPost);
    return printPosts;
    
  }

 // if (data.element.data.userId === auth.currentUser.uid)


