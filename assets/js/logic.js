
// Common Page Selections
const darkModeToggler = document.querySelector( ".dark-mode-toggler" );
const modeWrapper = document.querySelector( ".mode-wrapper" );
const sunIcon = document.querySelector( ".sun-icon" );
const moonIcon = document.querySelector( ".moon-icon" );

// Form Page Selections
const landingIntroArea = document.querySelector( ".landing-intro-area" );
const usernameInput = document.querySelector( "#username" );
const titleInput = document.querySelector( "#title" );
const contentInput = document.querySelector( "#content" );
const formBtn = document.querySelector( ".form-btn" );

// Blog Page Selections
const postsContainer = document.querySelector( ".posts-container" );
const backBtn = document.querySelector( ".back-btn" );

// Global Variables
let postsArray = localStorage.getItem( "posts" ) ? JSON.parse( localStorage.getItem( "posts" ) ) : [];
let isDarkMode = localStorage.getItem( "isDarkMode" ) ? JSON.parse( localStorage.getItem( "isDarkMode" ) ) : false;

// Common Functions
const initializeCommonDMStyles = function() {
  if( isDarkMode ) {
    applyCommonDMStyles();
  } else {
    removeCommonDMStyles();
  }
}

const applyCommonDMStyles = function() {
  darkModeToggler.classList.add( "dm-dark-mode-toggler" );
  modeWrapper.classList.add( "dm-mode-wrapper" )
  sunIcon.classList.add( "hide" );
  moonIcon.classList.remove( "hide" );
}

const removeCommonDMStyles = function() {
  darkModeToggler.classList.remove( "dm-dark-mode-toggler" );
  modeWrapper.classList.remove( "dm-mode-wrapper" )
  sunIcon.classList.remove( "hide" );
  moonIcon.classList.add( "hide" );
}