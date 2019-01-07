//  Access CSS root variables (required for nav transitions)

const style = getComputedStyle(document.body);
const charcoal = style.getPropertyValue("--main-charcoal");
const tan = style.getPropertyValue("--main-tan");
const pink = style.getPropertyValue("--main-pink");
const gold = style.getPropertyValue("--main-gold");
const brown = style.getPropertyValue("--main-brown");

document.addEventListener("scroll", function() {
  scrolling = true;
});

// Carry out nav update functions on interval when scrolling
var scrolling = null;
setInterval(function() {
  if (scrolling) {
    scrolling = false;

    setNavColors();
  }
}, 50);

// Loading fade out

window.onload = function() {
  document.body.classList.remove("fade-out");
};

// Dynamically adjusts Nav styling to suit current panel
function setNavColors() {
  let currentPosition = document.scrollingElement.scrollTop;
  let aboutYPos = document.getElementById("about-section").offsetTop;
  let projectsYPos = document.getElementById("projects").offsetTop;
  let footerYPos = document.getElementById("footer").offsetTop;

  let buffer = 50;

  let aboutStyle = document.getElementById("about").style;
  let worksStyle = document.getElementById("works").style;
  let contactStyle = document.getElementById("contact").style;

  if (currentPosition < aboutYPos - buffer) {
    // CLEARS INACTIVE TABS
    aboutStyle.backgroundColor = "";
    worksStyle.backgroundColor = "";
    contactStyle.backgroundColor = "";
  } else if (currentPosition < projectsYPos - buffer) {
    // SECTION 1 (welcome / about)

    // SETS ACTIVE NAVBAR TAB COLOR, CLEARS INACTIVE TABS
    aboutStyle.backgroundColor = gold;
    worksStyle.backgroundColor = "";
    contactStyle.backgroundColor = "";
    // SET NAV BACKGROUND AND HOVER ROOT COLOR VARIABLES
    document.documentElement.style.setProperty("--nav-background", charcoal);
    document.documentElement.style.setProperty("--nav-hover", tan);
  } else if (currentPosition < footerYPos - buffer) {
    // SECTION 2 (projects)
    aboutStyle.backgroundColor = "";
    worksStyle.backgroundColor = charcoal;
    contactStyle.backgroundColor = "";
    document.documentElement.style.setProperty("--nav-background", gold);
    document.documentElement.style.setProperty("--nav-hover", tan);
  } else {
    // SECTION 3 (contact)
    aboutStyle.backgroundColor = "";
    worksStyle.backgroundColor = "";
    contactStyle.backgroundColor = gold;
    document.documentElement.style.setProperty("--nav-background", charcoal);
    document.documentElement.style.setProperty("--nav-hover", tan);
  }
}

// EXPANSION PANEL FOR PROJECT TILES
function expandPanel(id) {
  let popup = document.getElementById(id);
  if (popup.style.opacity == 1 && popup.style.maxHeight == "250px") {
    popup.style.maxHeight = 0;
    popup.style.opacity = 0;
    popup.style.paddingTop = 0;
    popup.style.paddingBottom = 0;
  } else {
    popup.style.opacity = 1;
    popup.style.maxHeight = "250px";
    popup.style.paddingBottom = "1rem";
  }
}

// ABOUT CUBE

var cube = document.querySelector(".cube");
var radioGroup = document.querySelector(".radio-group");
var currentClass = "";

function changeSide() {
  var checkedRadio = radioGroup.querySelector(":checked");
  var showClass = "show-" + checkedRadio.value;
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener("change", changeSide);
