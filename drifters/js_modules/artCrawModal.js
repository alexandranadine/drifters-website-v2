import loadEvents from "./events";

function createACModal() {
  const main = document.querySelector("main");

  const acContainer = document.createElement("div");
  acContainer.classList.add("modal-container");

  const closeModalContainer = document.createElement("div");
  closeModalContainer.classList.add("close-modal");

  const closeModalButton = document.createElement("button");
  closeModalButton.addEventListener("click", () => {
    loadEvents()
  });

  const acTitle = document.createElement("div");
  acTitle.classList.add("modal-title");

  const acContent = document.createElement("div");
  acContent.classList.add("modal-content");

  main.appendChild(acContainer);
  acContainer.appendChild(closeModalContainer);
  closeModalContainer.appendChild(closeModalButton);
  acContainer.appendChild(acTitle);
  acContainer.appendChild(acContent);

  acTitle.innerHTML = `<h2>art & music fest</h2>
    <h1>art crawl</h1>
    <hr>`;

    acContent.innerHTML = `<p>sdjhkgsfgjkshdgfjkhsdgfhjsdgj</p>`;
}

export default function loadACModal() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createACModal());
}