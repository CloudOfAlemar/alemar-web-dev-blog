
const usernameInput = document.querySelector( "#username" );
const titleInput = document.querySelector( "#title" );
const contentInput = document.querySelector( "#content" );
const formBtn = document.querySelector( ".form-btn" );
const postsContainer = document.querySelector( ".posts-container" );
const postsArray = [];

if( localStorage.getItem( "posts" ) ) {
  const dataArray = JSON.parse( localStorage.getItem( "posts" ) );
  dataArray.forEach( dataObj => {
    postsArray.push( dataObj );
  } );
}