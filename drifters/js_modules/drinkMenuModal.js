import { loadMenu } from "./menu";

function createDrinkModal() {
  const main = document.querySelector("main");

  const drinkContainer = document.createElement("div");
  drinkContainer.classList.add("modal-container");

  const closeModalContainer = document.createElement("div");
  closeModalContainer.classList.add("close-modal");

  const closeModalButton = document.createElement("button");
  closeModalButton.addEventListener("click", () => {
    loadMenu()
  });

  const drinkTitle = document.createElement("div");
  drinkTitle.classList.add("modal-title");

  const drinkContent = document.createElement("div");
  drinkContent.classList.add("modal-content");

  main.appendChild(drinkContainer);
  drinkContainer.appendChild(closeModalContainer);
  closeModalContainer.appendChild(closeModalButton);
  drinkContainer.appendChild(drinkTitle);
  drinkContainer.appendChild(drinkContent);

  drinkTitle.innerHTML = `<h2>yummy</h2>
    <h1>dranks</h1>
    <hr>`;

    drinkContent.innerHTML = `<p>FOOOOOOOOOOOOOOOOD</p>`;
}

export default function loadDrinkModal() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createDrinkModal());
}