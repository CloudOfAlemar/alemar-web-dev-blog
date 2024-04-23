
const usernameInput = document.querySelector( "#username" );
const titleInput = document.querySelector( "#title" );
const contentInput = document.querySelector( "#content" );
const formBtn = document.querySelector( ".form-btn" );
const posts = [];

const submitFormInput = function() {
  if( usernameInput.value && titleInput.value && contentInput.value ) {
    const post = {
      username: usernameInput.value,
      title: titleInput.value,
      content: contentInput.value
    };
    posts.push( post );
    localStorage.setItem( "posts", JSON.stringify( posts ) );
  }
}