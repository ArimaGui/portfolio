const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const hrefGabi = document.getElementById("href-gabi");
const hrefGui = document.getElementById("href-gui");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

hrefGabi.addEventListener("click", () => {
  window.location.href = "#gabi-portfolio";
});

hrefGui.addEventListener("click", () => {
  window.location.href = "#gui-portfolio";
});
