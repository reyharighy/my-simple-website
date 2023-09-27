// ------------------------- GENERAL FADE IN -------------------------

let elementsArray = document.querySelectorAll("section, header.main-navigation, .mainFooter, .fadeIn");

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

// ----------------- END DOCK MENU ON LARGE SCREENS WHEN SCROLLED -------------------
