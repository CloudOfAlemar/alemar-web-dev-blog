
const submitFormInput = function() {
  if( usernameInput.value && titleInput.value && contentInput.value ) {
    const postObj = {
      username: usernameInput.value,
      title: titleInput.value,
      content: contentInput.value
    };
    postsArray.push( postObj );
    localStorage.setItem( "posts", JSON.stringify( postsArray ) );
  }
}

formBtn.addEventListener( "click", submitFormInput );