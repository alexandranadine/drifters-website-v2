function createRes() {
  const main = document.querySelector("main");
  const resContainer = document.createElement("div");
  resContainer.classList.add("container");
  main.appendChild(resContainer);

  resContainer.innerHTML = "<h1>fddfgdfgdgggggggggggggg</h1>";
}

export default function loadRes() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createRes());
}
