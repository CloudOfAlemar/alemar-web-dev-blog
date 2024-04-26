
const createPost = function( parent, postObj ) {
  const post = document.createElement( "article" );
  post.classList.add( "post" );
  const postHeading = document.createElement( "h2" );
  postHeading.textContent = postObj.title;
  postHeading.classList.add( "post-heading" );
  const postContent = document.createElement( "p" );
  postContent.textContent = postObj.content;
  postContent.classList.add( "post-content" );
  const postAuthor = document.createElement( "p" );
  postAuthor.textContent = postObj.username;
  postAuthor.classList.add( "post-author" );
  post.insertAdjacentElement( "beforeend", postHeading );
  post.insertAdjacentElement( "beforeend", postContent );
  post.insertAdjacentElement( "beforeend", postAuthor );
  parent.appendChild( post );
}

if( localStorage.getItem( "posts" ) ) {
  JSON.parse( localStorage.getItem( "posts" ) ).forEach( postObj => {
    createPost( postsContainer, postObj );
  } );
}

if( isDarkMode ) {
  document.querySelectorAll( ".post" ).forEach( post => {
    post.classList.add( "dm-post" );
  } );
} else {
  document.querySelectorAll( ".post" ).forEach( post => {
    post.classList.remove( "dm-post" );
  } );
}

darkModeToggler.addEventListener( "click", function() {
  if( !isDarkMode ) {
    applyCommonDMStyles();
    document.querySelectorAll( ".post" ).forEach( post => {
      post.classList.add( "dm-post" );
    } );
    isDarkMode = true;
  } else {
    removeCommonDMStyles();
    document.querySelectorAll( ".post" ).forEach( post => {
      post.classList.remove( "dm-post" );
    } );
    isDarkMode = false;
  }
} );

backBtn.addEventListener( "click", function() {
  localStorage.setItem( "isDarkMode", isDarkMode );
} );

initializeCommonDMStyles();