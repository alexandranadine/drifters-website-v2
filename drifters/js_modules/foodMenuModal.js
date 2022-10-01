import { loadMenu } from "./menu";

function createFoodModal() {
  const main = document.querySelector("main");

  const foodContainer = document.createElement("div");
  foodContainer.classList.add("modal-container");

  const closeModalContainer = document.createElement("div");
  closeModalContainer.classList.add("close-modal");

  const closeModalButton = document.createElement("button");
  closeModalButton.addEventListener("click", () => {
    loadMenu()
  });

  const foodTitle = document.createElement("div");
  foodTitle.classList.add("modal-title");

  const foodContent = document.createElement("div");
  foodContent.classList.add("modal-content");

  main.appendChild(foodContainer);
  foodContainer.appendChild(closeModalContainer);
  closeModalContainer.appendChild(closeModalButton);
  foodContainer.appendChild(foodTitle);
  foodContainer.appendChild(foodContent);

  foodTitle.innerHTML = `<h2>yummy</h2>
    <h1>food</h1>
    <hr>`;

  foodContent.innerHTML = `<p>FOOOOOOOOOOOOOOOOD</p>`;
}

export default function loadFoodModal() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createFoodModal());
}
