const navbar = document.getElementById("navbar");
const hero = document.getElementById("hero");
const vocub = document.getElementById("vocub");
const faq = document.getElementById("FAQ");
const footer = document.getElementById("footer");

const login = () => {
  const password = document.getElementById("password");
  const name = document.getElementById("name");
  if (!name.value) {
    alert("Provide a random name first!");
    return;
  }
  if (password.value == 1234) {
    password.value = "";
    name.value = "";
    hero.classList.add("hidden");
    navbar.classList.remove("hidden");
    vocub.classList.remove("hidden");
    faq.classList.remove("hidden");
  } else {
    alert("Invalid password!");
  }
};

const logout = () => {
  hero.classList.remove("hidden");
  navbar.classList.add("hidden");
  vocub.classList.add("hidden");
  faq.classList.add("hidden");
};

const showLabels = (labels) => {
  const labelContainer = document.getElementById("label-container");
  labels.map((label, index) => {
    const newLabel = document.createElement("div");
    newLabel.innerHTML = `
      <button id=${label.id} class="btn btn-sm btn-soft btn-primary border-blue-700 text-sm md:text-base">
        <i class="fa-solid fa-book-open"></i> Lession-${index+1}
      </button>
    `;
    labelContainer.appendChild(newLabel)
  });
};

const fetchLabel = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => showLabels(data.data));
};

logout();
fetchLabel();

