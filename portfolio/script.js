const navDropDownBtn = document.getElementById("navDropDownBtn");
const menuItems = document.getElementById("menuItems");

navDropDownBtn.addEventListener("click", () => {
  if (navDropDownBtn.classList.contains("fa-bars")) {
    navDropDownBtn.classList.remove("fa-bars");
    navDropDownBtn.classList.add("fa-x");
    menuItems.classList.toggle("active");
  } else {
    navDropDownBtn.classList.remove("fa-x");
    navDropDownBtn.classList.add("fa-bars");
    menuItems.classList.remove("active");
  }
});
