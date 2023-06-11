const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector("nav");

function toggleMenu() {
  menu.classList.toggle("shown");
  const menuShown = menu.classList.contains("shown");
  if (menuShown) {
    console.log(menuShown);
    btn.textContent = "Luk";
  } else {
    console.log(menuShown);
    btn.textContent = "Menu";
  }
}

btn.addEventListener("click", toggleMenu);
