const fetchLabel = async () => {
  document.getElementById("lebel-spiner").classList.remove("hidden");
  try {
    fetch("https://openapi.programming-hero.com/api/levels/all")
      .then((res) => res.json())
      .then((data) => displayLabel(data.data));
  } catch (error) {
    console.log(error);
  } finally {
  }
};

const fetchWordsByLabel = (label_no) => {
  document.getElementById("card-spinner").classList.remove("hidden");
  fetch(`https://openapi.programming-hero.com/api/level/${label_no}`)
    .then((res) => res.json())
    .then((data) => displayWordCard(data.data));
};

const handleWordClick = (id) => {
  fetch(`https://openapi.programming-hero.com/api/word/${id}`)
    .then((res) => res.json())
    .then((data) => {
      displayDetails(data.data);
    });
};
