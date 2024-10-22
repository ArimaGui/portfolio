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
  document.getElementById("gabi-portfolio").scrollIntoView({
    behavior: "smooth",
  });
});

hrefGui.addEventListener("click", () => {
  document.getElementById("gui-portfolio").scrollIntoView({
    behavior: "smooth",
  });
});

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  const btn = document.getElementById("btnVoltarTopo");

  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
}

document.getElementById("btnVoltarTopo").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
