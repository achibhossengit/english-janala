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

const handleWordClick = (id) => {
  fetch(`https://openapi.programming-hero.com/api/word/${id}`)
    .then((res) => res.json())
    .then((data) => {
      displayDetails(data.data);
    });
};