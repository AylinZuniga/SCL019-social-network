import { deletePost, auth, editPost, likePost } from '../lib/index.js'
//Función para imprimir posts
export const printPosts = (array) => {
  const containerEmpty = document.querySelector('#wallPosts');
  containerEmpty.innerHTML = '';
  const viewPost = (element) => {
    const postView = `
        <div id="postContainer" class="postContainer">

         <div class="postUserMenu">

            <div class="user-post">
              <p class="user-name">${element.data.name}</p>
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


    let userEdit = '';
    if (element.data.userId === auth.currentUser.uid) {
      userEdit = `
                <div class="delete-edit">
                
                <button class="btn-pencil" value='${element.id}' ><img class="edit-post" src="./imagenes/edit.png" /></button>
                <button class="btn-trash" id="btnTrash" value='${element.id}' ><img class="delete-post" src="./imagenes/delete.png" /></button>
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
      const valueButton = element.value;//llamamos al elemento especifico que queremos modificar
      const editDocReview = containerEmpty.querySelector(`#writePost-${valueButton}`);//estamos llamando al valor del text area
      editDocReview.removeAttribute('readonly');//le quitamos el valor de solo lectura dejandolo editable
      const saveValue = containerEmpty.querySelector(
        `#mr-${element.value}-save`,
      );//llamamos al boton para guardar cambios
      saveValue.style.display = 'block';
      saveValue.addEventListener('click', () => {

        const description = editDocReview.value;//el nuevo texto sera el valor de editDocReview
        editPost(element.value, description);//llamamos la funcion de firebase
        saveValue.style.display = 'none';//ocultamos el boton de guardar

        editDocReview.setAttribute('readonly');//le devolvemos el valor de lectura
      });
    });
  });

  // Evento para dar likes
  const likeButton = containerEmpty.querySelectorAll('.btn-like');//tomamos el valor del selector
  likeButton.forEach((e) => {
    e.addEventListener('click', () => {
      const likeValue = e.value;
      const userId = auth.currentUser.uid;
      likePost(likeValue, userId);//guardamos los parametros para entregarselos a las funciones de index.js
    });
  });



  return printPosts;
};




