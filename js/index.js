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

const displayLabel = (labels) => {
  const labelContainer = document.getElementById("label-container");
  labels.forEach((label) => {
    const newLabel = document.createElement("div");
    newLabel.innerHTML = `
      <button onclick="handleLabelClick(${label.level_no})" class="btn btn-sm btn-soft btn-primary border-blue-700 text-sm md:text-base">
        <i class="fa-solid fa-book-open"></i> Lession-${label.level_no}
      </button>
    `;
    labelContainer.appendChild(newLabel);
  });
};

const displayWordCard = (words) => {
  const cardContainer = document.getElementById("card-container");
  if(words.length <= 0){
    document.getElementById('length-error').classList.remove('hidden')
    return;
  }
  words.forEach((word) => {
    const newCard = document.createElement("div");
    newCard.innerHTML = `
    <div id=${word.id} class="p-4 md:p-5 bg-white text-center space-y-3 rounded-md">
        <h3 class="text-lg md:text-xl font-bold poppins-bold">${word.word}</h3>
        <p class="text-sm md:text-base font-semibold poppins-bold">Meaning/Prounciation</p>
        <p class="text-sm md:text-xl text-gray-600 font-bold hind-siliguri-medium">"${word.meaning} / ${word.pronunciation}"</p>
        <div class="flex justify-between items-center mt-5">
            <button class="px-3 py-1 bg-base-300 rounded-sm hover:cursor-pointer">
                <i class="fa-solid fa-exclamation"></i>
            </button>
            <button class="px-3 py-1 bg-base-300 rounded-sm hover:cursor-pointer">
                <i class="fa-solid fa-volume-high"></i>
            </button>
        </div>
    </div>
    `;
    cardContainer.appendChild(newCard);
  });
};

const handleLabelClick = (label_no) => {
  document.getElementById("card-container").innerHTML = "";
  document.getElementById("select-error").classList.add('hidden');
  document.getElementById('length-error').classList.add('hidden')
  fetchWordsByLabel(label_no);
};

const fetchLabel = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayLabel(data.data));
};

const fetchWordsByLabel = (label_no) => {
  fetch(`https://openapi.programming-hero.com/api/level/${label_no}`)
    .then((res) => res.json())
    .then((data) => displayWordCard(data.data));
};

logout();
fetchLabel();
