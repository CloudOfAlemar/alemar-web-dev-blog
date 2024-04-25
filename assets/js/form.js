
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

darkModeToggler.addEventListener( "click", function( event ) {
  if( isDarkMode ) {
    modeWrapper.classList.remove( "dm-mode-wrapper" );
    sunIcon.classList.remove( "hide" );
    moonIcon.classList.add( "hide" );
    document.body.classList.remove( "dm-body" );
    darkModeToggler.classList.remove( "dm-dark-mode-toggler" );
    landingIntroArea.classList.remove( "dm-landing-intro-area" );
    formBtn.classList.remove( "dm-form-btn" );
    isDarkMode = false;
  } else {
    modeWrapper.classList.add( "dm-mode-wrapper" );
    sunIcon.classList.add( "hide" );
    moonIcon.classList.remove( "hide" );
    document.body.classList.add( "dm-body" );
    darkModeToggler.classList.add( "dm-dark-mode-toggler" );
    landingIntroArea.classList.add( "dm-landing-intro-area" );
    formBtn.classList.add( "dm-form-btn" );
    isDarkMode = true;
  }
} );