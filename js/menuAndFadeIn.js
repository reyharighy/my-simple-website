/**
 * Function used to show or hide the menu
 * Used when clicking on burger icon.
 */
function toggleMenu() {
    var nav = document.querySelectorAll("nav#main-navigation")[0];
    nav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  
    /*
       Here we are adding another class after some time, which is used to 
       display the pseudo element ::after on the nav with a delay (the background 
       logo at the bottom of the nav on phone size).
       */
    // if (nav.classList.contains('active')) {
    //     nav.classList.remove('open');
    //     setTimeout(function () {
    //         nav.classList.add('bottom-logo-background');
    //     }, 200)
    // } else {
    //     nav.classList.remove('bottom-logo-background');
    // }
  }
  
  function scrollTo(hash) {
    location.hash = "#" + hash;
  }
  
  // ------------------------- END MAIN MENU -------------------------
  
  // -----------------------------------------------------------------------------------------------------------------------------
  
  // ------------------------- GENERAL FADE IN -------------------------
  let elementsArray = document.querySelectorAll(
    "section, header.main-navigation, .mainFooter, .fadeIn"
  );
  fadeIn();
  window.addEventListener("scroll", fadeIn);
  function fadeIn() {
    document.body.classList.add("loaded");
  
    for (var i = 0; i < elementsArray.length; i++) {
      var elem = elementsArray[i];
      var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
      if (distInView < 0) {
        elem.classList.add("inView");
      } else {
        elem.classList.remove("inView");
      }
    }
  }
  
  window.addEventListener("load", (event) => {
    fadeIn();
  });
  // ------------------------- END GENERAL FADE IN -------------------------
  
  // ------------------- PROFILE TEXT TOP MARGIN WITH IMAGE ----------------
  
  // window.addEventListener("load", (event) => {
  //   calculateTopMarginForProfileText();
  // });
  
  // window.addEventListener("resize", function (event) {
  //   calculateTopMarginForProfileText();
  // });
  
  // function calculateTopMarginForProfileText() {
  //   let profileImage = document.querySelector(".person-container img");
  //   let teamText = document.querySelector(".team-text");
  
  //   if (
  //     profileImage != undefined ||
  //     profileImage != null ||
  //     teamText != undefined ||
  //     teamText != null
  //   ) {
  //     if (window.innerWidth < 768) {
  //       teamText.style.marginTop = "0px";
  //       return;
  //     }
  
  //     teamText.style.display = "block";
  //     let profileImageHeight = profileImage.offsetHeight;
  //     let teamTextHeight = teamText.offsetHeight;
  //     let margin = profileImageHeight - teamTextHeight;
  //     teamText.style.marginTop = margin + "px";
  //   }
  // }
  // ----------------- END PROFILE TEXT TOP MARGIN WITH IMAGE --------------
  
  // window.addEventListener("load", (event) => {
  //   calculateTopMarginForProfileText();
  //   let showCookiesButton = document.querySelector(".show-cookies-button");
  //   console.log("showCookiesButton", showCookiesButton);
  //   showCookiesButton.addEventListener("click", toggleCookiePopup);
  // });
  
  // function toggleCookiePopup(event) {
  //   event.preventDefault();
  //   document.getElementById("elc-cookie-consent").classList.add("elc-fullwidth");
  //   document.getElementById("elc-cookie-consent").classList.remove("elc-small");
  //   document.getElementById("elc-cookie-consent").classList.remove("elc-hidden");
  // }
  
  // ----------------- DOCK MENU ON LARGE SCREENS WHEN SCROLLED -------------------
  
  let lastScrollPosition = window.scrollY;
  window.onscroll = function () {
    if (window.scrollY > 100) {
      document.getElementById("main-navigation").classList.add("docked-menu");
    } else {
      document.getElementById("main-navigation").classList.remove("docked-menu");
    }
  
    let currentScrollPosition = window.scrollY;
    if (currentScrollPosition < 400 && document.getElementById("main-navigation").classList.contains("docked-menu")) {
      // User has scrolled up
      document.getElementById("main-navigation").classList.add("scrolled-up");
    } else {
      document.getElementById("main-navigation").classList.remove("scrolled-up");
    }
  
    lastScrollPosition = currentScrollPosition;
  };