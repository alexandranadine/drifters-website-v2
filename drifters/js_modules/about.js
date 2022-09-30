function createAbout() {
  const main = document.querySelector("main");
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("container");
  const aboutContent = document.createElement("div");
  aboutContent.classList.add("content");
  const aboutTitle = document.createElement("div");
  aboutTitle.classList.add("title");

  main.appendChild(aboutContainer);
  aboutContainer.appendChild(aboutTitle);
  aboutContainer.appendChild(aboutContent);

  aboutTitle.innerHTML = `<h2>welcome to</h2>
  <h1>Drifters</h1>
  <hr>`;
  aboutContent.innerHTML = `<p>Created as an all-day gathering for locals and visitors alike, Drifters is a energetic space that
  serves a stylish menu without the fuss.
  The focus is on great food + drinks, from
  morning brunch to late nights at the bar, where the staff are so charming you’ll probably let them
  join your party.</p><h3>Open daily from <span>10am-1:30am</span></h3>`;
}

export default function loadAbout() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createAbout());
}
