
const darkModeToggler = document.querySelector( ".dark-mode-toggler" );
const modeWrapper = document.querySelector( ".mode-wrapper" );
const sunIcon = document.querySelector( ".sun-icon" );
const moonIcon = document.querySelector( ".moon-icon" );
const landingIntroArea = document.querySelector( ".landing-intro-area" );
const usernameInput = document.querySelector( "#username" );
const titleInput = document.querySelector( "#title" );
const contentInput = document.querySelector( "#content" );
const formBtn = document.querySelector( ".form-btn" );
const postsContainer = document.querySelector( ".posts-container" );
const postsArray = [];
let isDarkMode = false;

if( localStorage.getItem( "posts" ) ) {
  const dataArray = JSON.parse( localStorage.getItem( "posts" ) );
  dataArray.forEach( dataObj => {
    postsArray.push( dataObj );
  } );
}