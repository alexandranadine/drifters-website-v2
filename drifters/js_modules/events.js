import loadACModal from "./artCrawModal";
import loadWeeklyModal from "./weeklyModal";

function createEvents() {
  const main = document.querySelector("main");

  const eventContainer = document.createElement("div");
  eventContainer.classList.add("container");

  const eventTitle = document.createElement("div");
  eventTitle.classList.add("title");

  const eventContent = document.createElement("div");
  eventContent.classList.add("content");

  const eventsBtnGroup = document.createElement("div");
  eventsBtnGroup.classList.add('event-buttons')

  const weeklyButton = document.createElement("button");
  weeklyButton.textContent = "Weekly Events"
  weeklyButton.addEventListener('click', () => {
    loadWeeklyModal()
  })

  const artCrawlButton = document.createElement("button");
  artCrawlButton.textContent = "Art Crawl"
  artCrawlButton.addEventListener('click', () => {
    loadACModal()
  })

  const eventCTO = document.createElement("div");
  eventCTO.classList.add("call-to-action");

  main.appendChild(eventContainer);
  eventContainer.appendChild(eventTitle);
  eventContainer.appendChild(eventContent);
  eventContainer.appendChild(eventsBtnGroup)
  eventsBtnGroup.appendChild(weeklyButton)
  eventsBtnGroup.appendChild(artCrawlButton)
  eventContainer.appendChild(eventCTO);

  eventTitle.innerHTML = `<h2>art & music</h2>
  <h1>Events</h1>
  <hr>`;

  eventContent.innerHTML = `<p>Bored on a Tuesday? Forget about it!
  From karaoke to live music to our incredible monthly Art Crawl, there's always something going on at Drifters!</p>`;

  eventCTO.innerHTML = `<p><h3>Click to register for the next Art Crawl!</h3></p>`
}

export default function loadEvents() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createEvents());
}
