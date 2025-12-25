const fruitsApi = "https://api.api-onepiece.com/v2/fruits/en";
const charactersApi = "https://api.api-onepiece.com/v2/characters/en";

const container = document.getElementById("contentContainer");
const searchInput = document.getElementById("search");
const noResults = document.getElementById("noResults");

const fruitTab = document.getElementById("fruitTab");
const characterTab = document.getElementById("characterTab");

let currentData = [];
let currentType = "fruits";

/* FETCH */
async function fetchFruits() {
  const res = await fetch(fruitsApi);
  currentData = await res.json();
  currentType = "fruits";
  searchInput.placeholder = "Search Devil Fruits...";
  displayData(currentData);
}

async function fetchCharacters() {
  const res = await fetch(charactersApi);
  currentData = await res.json();
  currentType = "characters";
  searchInput.placeholder = "Search Characters...";
  displayData(currentData);
}

/* DISPLAY */
function displayData(data) {
  container.innerHTML = "";
  noResults.style.display = data.length === 0 ? "block" : "none";

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description || "No description available."}</p>
    `;

    container.appendChild(card);
  });
}

/* SEARCH */
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = currentData.filter(item =>
    item.name.toLowerCase().includes(value)
  );

  displayData(filtered);
});

/* TABS */
fruitTab.addEventListener("click", () => {
  fruitTab.classList.add("active");
  characterTab.classList.remove("active");
  searchInput.value = "";
  fetchFruits();
});

characterTab.addEventListener("click", () => {
  characterTab.classList.add("active");
  fruitTab.classList.remove("active");
  searchInput.value = "";
  fetchCharacters();
});

/* DEFAULT */
fetchFruits();
