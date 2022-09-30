function createHome() {
  const main = document.querySelector("main");

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");

  const logo = document.createElement("img");
  logo.src = "./img/logo.png";

  main.appendChild(logoContainer);
  logoContainer.appendChild(logo);
}

export default function loadHome() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createHome());
}
