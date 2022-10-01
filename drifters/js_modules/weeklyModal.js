import loadEvents from "./events";

function createWeeklyModal() {
  const main = document.querySelector("main");

  const weeklyContainer = document.createElement("div");
  weeklyContainer.classList.add("modal-container");

  const closeModalContainer = document.createElement("div");
  closeModalContainer.classList.add("close-modal");

  const closeModalButton = document.createElement("button");
  closeModalButton.addEventListener("click", () => {
    loadEvents()
  });

  const weeklyTitle = document.createElement("div");
  weeklyTitle.classList.add("modal-title");

  const weeklyContent = document.createElement("div");
  weeklyContent.classList.add("modal-content");

  main.appendChild(weeklyContainer);
  weeklyContainer.appendChild(closeModalContainer);
  closeModalContainer.appendChild(closeModalButton);
  weeklyContainer.appendChild(weeklyTitle);
  weeklyContainer.appendChild(weeklyContent);

  weeklyTitle.innerHTML = `<h2>weekly</h2>
    <h1>events</h1>
    <hr>`;

    weeklyContent.innerHTML = `<p>sdjhkgsfgjkshdgfjkhsdgfhjsdgj</p>`;
}

export default function loadWeeklyModal() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createWeeklyModal());
}