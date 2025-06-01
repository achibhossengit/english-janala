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

const handleLabelClick = (label_no, e) => {
  const allBtn = document.getElementsByClassName("level-btn");
  for (const btn of allBtn) btn.classList.remove("btn-active");
  e.target.classList.add("btn-active");
  document.getElementById("card-container").innerHTML = "";
  document.getElementById("select-error").classList.add("hidden");
  document.getElementById("length-error").classList.add("hidden");
  fetchWordsByLabel(label_no);
};

// logout();
fetchLabel();