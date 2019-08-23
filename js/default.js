// Add active class to the current button (highlight it)
var header = document.getElementById("navTab");
var tabs = header.getElementsByClassName("nav_tabs");
for (var i = 0; i < tabs.length; i++) {
  console.log("nav tabs length ", tabs.length);
  tabs[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activeNavTab");
  if (current.length > 0) {
    current[0].className = current[0].className.replace("activeNavTab", "");
  }
  this.className += "activeNavTab";
  });
}
// ----COLLAPSIBLE EFFECT -----
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
