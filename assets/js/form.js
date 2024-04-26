
const submitFormInput = function( postsArray, isDarkMode ) {
  if( usernameInput.value && titleInput.value && contentInput.value ) {
    const postObj = {
      username: usernameInput.value,
      title: titleInput.value,
      content: contentInput.value
    };
    postsArray.push( postObj );
    localStorage.setItem( "posts", JSON.stringify( postsArray ) );
    localStorage.setItem( "isDarkMode", JSON.stringify( isDarkMode ) );
  }
}

formBtn.addEventListener( "click", function() {
  submitFormInput( postsArray, isDarkMode );
} );

darkModeToggler.addEventListener( "click", function() {
  if( !isDarkMode ) {
    applyCommonDMStyles();
    landingIntroArea.classList.add( "dm-landing-intro-area" );
    formBtn.classList.add( "dm-form-btn" );
    isDarkMode = true;
  } else {
    removeCommonDMStyles();
    landingIntroArea.classList.remove( "dm-landing-intro-area" );
    formBtn.classList.add( "dm-form-btn" );
    isDarkMode = false;
  }
} );

initializeCommonDMStyles();