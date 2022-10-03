import loadAbout from "./about";
import loadContact from "./contact";
import loadEvents from "./events";
import loadHome from "./home";
import { loadMenu } from "./menu";
import loadRes from "./reservations";

const container = document.querySelector("#app");

// ------------------------ NAV CREATION ------------------------ //
function createNavigation() {
  const header = document.createElement("header");

  const nav = document.createElement("nav");
  nav.classList.add("nav-container");

  const spacer = document.createElement("div");
  spacer.classList.add("spacer");

  const resContainer = document.createElement("div");
  resContainer.classList.add("res-button");

  const homeButton = document.createElement("button");
  homeButton.classList.add("nav-buttons", "active");
  homeButton.innerHTML = "<span>home</span>";
  homeButton.addEventListener("click", () => {
    loadHome();
  });

  const aboutButton = document.createElement("button");
  aboutButton.classList.add("nav-buttons");
  aboutButton.innerHTML = "<span>about</span>";
  aboutButton.addEventListener("click", () => {
    loadAbout();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("nav-buttons");
  menuButton.innerHTML = "<span>menu</span>";
  menuButton.addEventListener("click", () => {
    loadMenu();
  });

  const eventsButton = document.createElement("button");
  eventsButton.classList.add("nav-buttons");
  eventsButton.innerHTML = "<span>events</span>";
  eventsButton.addEventListener("click", () => {
    loadEvents();
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("nav-buttons");
  contactButton.innerHTML = "<span>contact</span>";
  contactButton.addEventListener("click", () => {
    loadContact();
  });

  const reservationsButton = document.createElement("button");
  reservationsButton.innerHTML = "<span>reservations</span>";
  reservationsButton.addEventListener("click", () => {
    loadRes();
  });

  container.appendChild(header);
  header.appendChild(spacer);
  header.appendChild(nav);

  nav.appendChild(homeButton);
  nav.appendChild(aboutButton);
  nav.appendChild(menuButton);
  nav.appendChild(eventsButton);
  nav.appendChild(contactButton);

  header.appendChild(resContainer);
  resContainer.appendChild(reservationsButton);

  let buttons = document.querySelectorAll(".nav-buttons");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

// ------------------- MAIN CONTENT CREATION -------------------- //
function createContent() {
  const main = document.createElement("main");
  main.classList.add("home");
  container.appendChild(main);
  loadHome();
}

// ------------------- FOOTER CONTENT CREATION -------------------- //
function createFooter() {
  const footer = document.createElement("footer");
  container.appendChild(footer);
  const footerContainer = document.createElement("div");
  footer.appendChild(footerContainer);
  footerContainer.classList.add("footer-links");
  footerContainer.innerHTML = `<a href="https://www.instagram.com/drifterscocktails" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
  <a href="https://www.facebook.com/drifterscocktails" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
  <a href="mailto:drifterscocktails@gmail.com"><i class="fa-regular fa-envelope"></i></a>
  <a href="tel:+16612522471"><i class="fa-solid fa-phone"></i></a>`;
}

// ----------------------- BUILD THE SITE ----------------------- //
export default function buildWebsite() {
  createNavigation();
  createFooter();
  createContent();
}
