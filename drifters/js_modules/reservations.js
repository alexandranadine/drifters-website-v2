import loadResForm from "./resForm";

function createRes() {
  const main = document.querySelector("main");

  const resContainer = document.createElement("div");
  resContainer.classList.add("container");

  const resTitle = document.createElement("div");
  resTitle.classList.add("title");

  const resContent = document.createElement("div");
  resContent.classList.add("content");

  main.appendChild(resContainer);
  resContainer.appendChild(resTitle)
  resContainer.appendChild(resContent)
 

  resTitle.innerHTML = `<h2>secure a spot</h2>
  <h1>reservations</h1>
  <hr>`;
  resContent.appendChild(loadResForm())

  // resContent.innerHTML = `<p>Putting a form in here</p>`;
}

export default function loadRes() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createRes());
}
