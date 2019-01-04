const charcoal = "#333a3b";
const tan = "#665745";
const pink = "#b29189";
const gold = "#af7927";
const brown = "#663204";
var scrolling = null;
document.getElementById("about").style.backgroundColor = gold;

document.addEventListener("scroll", function() {
  scrolling = true;
});

setInterval(function() {
  if (scrolling) {
    scrolling = false;

    setNavColors();
  }
}, 50);

function setNavColors() {
  if (document.scrollingElement.scrollTop < window.innerHeight) {
    document.getElementById("contact").style.backgroundColor = "";
    document.getElementById("works").style.backgroundColor = "";
    document.getElementById("about").style.backgroundColor = gold;
    document.documentElement.style.setProperty("--nav-background", charcoal);
    document.documentElement.style.setProperty("--nav-hover", gold);
  } else if (
    document.scrollingElement.scrollTop > window.innerHeight &&
    document.scrollingElement.scrollTop < window.innerHeight * 2 - 30
  ) {
    document.getElementById("about").style.backgroundColor = "";
    document.getElementById("contact").style.backgroundColor = "";
    document.getElementById("works").style.backgroundColor = charcoal;
    document.documentElement.style.setProperty("--nav-background", gold);
    document.documentElement.style.setProperty("--nav-hover", charcoal);
  } else {
    document.getElementById("about").style.backgroundColor = "";
    document.getElementById("works").style.backgroundColor = "";
    document.getElementById("contact").style.backgroundColor = gold;
    document.documentElement.style.setProperty("--nav-background", charcoal);
    document.documentElement.style.setProperty("--nav-hover", gold);
  }
}

function openPopup(id) {
  let popup = document.getElementById(id);
  if (popup.style.opacity == 1 && popup.style.maxHeight == "200px") {
    popup.style.maxHeight = 0;
    popup.style.opacity = 0;
    popup.style.paddingTop = 0;
    popup.style.paddingBottom = 0;
  } else {
    popup.style.opacity = 1;
    popup.style.maxHeight = "200px";
    popup.style.paddingBottom = "1rem";
  }
}
