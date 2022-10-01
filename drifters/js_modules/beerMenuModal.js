import { loadMenu } from "./menu";

function createBeerModal() {
  const main = document.querySelector("main");

  const beerContainer = document.createElement("div");
  beerContainer.classList.add("modal-container");

  const closeModalContainer = document.createElement("div");
  closeModalContainer.classList.add("close-modal");

  const closeModalButton = document.createElement("button");
  closeModalButton.addEventListener("click", () => {
    loadMenu()
  });

  const beerTitle = document.createElement("div");
  beerTitle.classList.add("modal-title");

  const beerContent = document.createElement("div");
  beerContent.classList.add("modal-content");

  main.appendChild(beerContainer);
  beerContainer.appendChild(closeModalContainer);
  closeModalContainer.appendChild(closeModalButton);
  beerContainer.appendChild(beerTitle);
  beerContainer.appendChild(beerContent);

  beerTitle.innerHTML = `<h2>yummy</h2>
    <h1>brews</h1>
    <hr>`;

    beerContent.innerHTML = `<p>FOOOOOOOOOOOOOOOOD</p>`;
}

export default function loadBeerModal() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createBeerModal());
}