const navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.visibility = "visible";
}
function hideMenu() {
  navLinks.style.visibility = "hidden";
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) navLinks.style.visibility = "visible";
  else if (window.innerWidth <= 700) navLinks.style.visibility = "hidden";
});
