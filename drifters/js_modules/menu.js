import loadBeerModal from "./beerMenuModal";
import loadDrinkModal from "./drinkMenuModal";
import loadFoodModal from "./foodMenuModal";

function createMenu() {
  const main = document.querySelector("main");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("container");

  const menuContent = document.createElement("div");
  menuContent.classList.add("content");

  const menuTitle = document.createElement("div");
  menuTitle.classList.add("title");

  const menuBtnGroup = document.createElement("div");
  menuBtnGroup.classList.add("menu-buttons");

  const foodButton = document.createElement("button");
  foodButton.textContent = "Food";
  foodButton.addEventListener('click', () => {
    loadFoodModal()
  })

  const drinkButton = document.createElement("button");
  drinkButton.textContent = "Cocktails";
  drinkButton.addEventListener('click', () => {
    loadDrinkModal()
  })

  const beerButton = document.createElement("button");
  beerButton.textContent = "Beer";
  beerButton.addEventListener('click', () => {
    loadBeerModal()
  })

  main.appendChild(menuContainer);
  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(menuContent);
  menuContainer.appendChild(menuBtnGroup);
  menuBtnGroup.appendChild(foodButton);
  menuBtnGroup.appendChild(drinkButton);
  menuBtnGroup.appendChild(beerButton);

  menuTitle.innerHTML = `<h2>damn good eats</h2>
  <h1>the menu</h1>
  <hr>`;
  menuContent.innerHTML = `<p>Check out our food & drink menus!</p>`;

}

export function loadMenu() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createMenu());
}
