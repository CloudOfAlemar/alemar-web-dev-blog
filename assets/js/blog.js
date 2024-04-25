
const createPost = function( parent, titleValue, contentValue, usernameValue ) {
  const post = document.createElement( "article" );
  post.classList.add( "post" );
  const postHeading = document.createElement( "h2" );
  postHeading.textContent = titleValue;
  postHeading.classList.add( "post-heading" );
  const postContent = document.createElement( "p" );
  postContent.textContent = contentValue;
  postContent.classList.add( "post-content" );
  const postAuthor = document.createElement( "p" );
  postAuthor.textContent = usernameValue;
  postAuthor.classList.add( "post-author" );
  post.insertAdjacentElement( "beforeend", postHeading );
  post.insertAdjacentElement( "beforeend", postContent );
  post.insertAdjacentElement( "beforeend", postAuthor );
  parent.appendChild( post );
}

if( localStorage.getItem( "posts" ) ) {
  const dataArray = JSON.parse( localStorage.getItem( "posts" ) );
  dataArray.forEach( dataObj => {
    const { title, content, username } = dataObj;
    createPost( postsContainer, title, content, username );
  } );
}