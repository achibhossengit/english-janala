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
    navbar.classList.remove("hidden");
    vocub.classList.remove("hidden");
    faq.classList.remove("hidden");
  } else {
    alert("Invalid password!");
  }
};

const logout = () => {
  navbar.classList.add("hidden");
  vocub.classList.add("hidden");
  faq.classList.add("hidden");
};

logout();
