var navbar = document.getElementById("navbar");
var headerbox = document.getElementById("headerbox");
var tester = document.getElementById("tester");

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

function toggleLightMode() {
  if (theme.getAttribute("href") == "light_mode.css") {
    theme.setAttribute("href", "default.css");
    header_img.setAttribute("src", "images/thebanjodogg_whitetext.png");
  } else {
    theme.setAttribute("href", "light_mode.css");
    header_img.setAttribute("src", "images/thebanjodogg.png");
  }
}

function setPagePreference(pagemode, cvalue) {
  document.cookie = pagemode + "=" + cvalue + ";";
}
