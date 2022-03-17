import { deletePost,auth,editPost} from '../lib/index.js'
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
          
           
         </div>

           <div class="delete-edit">
              <img class="edit-post" src="./imagenes/edit.png" />
              <img class="delete-post" src="./imagenes/delete.png" />
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

          
          let userEdit= '';
          if (element.data.userId === auth.currentUser.uid) {
            userEdit = `
                <div class="edit-post">
                
                <button class="btn-pencil" value='${element.id}' > Editar</button>
                <button class="btn-trash" id="btnTrash" value='${element.id}' > Borrar</button>
                <button class="btn-save" id='mr-${element.id}-save'>Guardar</button>
                </div>
                `;
          }

          containerEmpty.innerHTML += postView + userEdit;
    };

    array.forEach(viewPost);
    
    
  

    //Evento para borrar post
    const deleteButton = containerEmpty.querySelectorAll('.btn-trash');
    deleteButton.forEach((e) => {
      e.addEventListener('click', () => {
        // eslint-disable-next-line no-restricted-globals
        const confirmDelete = confirm('¿Estás seguro de eliminar este Post?');
        if (confirmDelete === true) {
          deletePost(e.value);
        }
      });
    });



      // Evento para editar post
      const updatePost = containerEmpty.querySelectorAll('.btn-pencil');
      updatePost.forEach((element) => {
        element.addEventListener('click', () => {
          const valueButton = element.value;
          const editDocReview = containerEmpty.querySelector(`#writePost-${valueButton}`);
          editDocReview.removeAttribute('readonly');
          const saveValue = containerEmpty.querySelector(
            `#mr-${element.value}-save`,
          );
          saveValue.style.display = 'block';
          saveValue.addEventListener('click', () => {
            
            const description = editDocReview.value;
            editPost(element.value, description);
            saveValue.style.display = 'none';
            
            editDocReview.setAttribute('readonly');
          });
        });
      });


      return printPosts;
    };



