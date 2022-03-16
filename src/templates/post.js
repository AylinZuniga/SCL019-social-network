//Función para imprimir posts
export const printPosts = (array) => {
    const containerEmpty = document.querySelector('#wallPosts');
    containerEmpty.innerHTML = '';
    const viewPost = (element) => {
      const postView = `
        <div id="postModal" class="post-modal">
        <div class="user-post">
          
          <p class="img-user2-p">${element.data.name}</p>
        </div>
        <div class="post-buttons"></butt
        <textarea id="writePost-${element.id}" class="review-post2" readonly> ${element.data.description} </textarea>
        <div class="buttons">
          <button class="btn-like" value='${element.id}'><img class="like-post" src="./imagenes/like.png" />${element.data.likesCounter}</button>
          `;


          containerEmpty.innerHTML += postView;
    }
  

    array.forEach(viewPost);
    return printPosts;
    
  }

 // if (data.element.data.userId === auth.currentUser.uid)


