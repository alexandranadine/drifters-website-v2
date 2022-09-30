function initMap() {
  // The location of Drifters
  const drifters = { lat: 34.39238700164066, lng: -118.5615254647571 };
  // The map, centered at Drifters
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: drifters,
    mapId: "7a93c550b979b6e9",
  });
  // The marker, positioned at Drifters
  const marker = new google.maps.Marker({
    position: drifters,
    map: map,
  });
} 

function createContact() {
  const main = document.querySelector("main");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("container");

  const contactTitle = document.createElement("div");
  contactTitle.classList.add("title");

  const contactContent = document.createElement("div");
  contactContent.classList.add("content");

  const mapContainer = document.createElement("div");
  mapContainer.setAttribute("id", "map");

  const contactSocials = document.createElement("div");
  contactSocials.classList.add("socials");

  main.appendChild(contactContainer);
  contactContainer.appendChild(contactTitle);
  contactContainer.appendChild(contactContent);
  contactContainer.appendChild(mapContainer);
  contactContainer.appendChild(contactSocials);
  initMap();

  contactTitle.innerHTML = "<h2>get in touch</h2><h1>contact</h1><hr>";
  contactContent.innerHTML = `<p>Located at 25848 Tournament Rd, Valencia, CA<br>Give us a call: <a href="tel:+16612522471">(661)252-2471</a></p>`;
  contactSocials.innerHTML = `<a href="https://www.instagram.com/drifterscocktails" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
  <a href="https://www.facebook.com/drifterscocktails" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
  <a href="mailto:drifterscocktails@gmail.com"><i class="fa-regular fa-envelope"></i></a>`
}

export default function loadContact() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createContact());
}
