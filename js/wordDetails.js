const displayDetails = (word) => {
  const modal = document.getElementById("detail-modal");
  const details = document.createElement("div");
  details.classList.add("modal-box");
  details.innerHTML = `
    <div class="space-y-5 p-3 border-2 border-gray-100 rounded-md">
        <h3 class="text-lg font-bold">${
          word.word
        } (<i class="fa-solid fa-microphone-lines"></i> ${
    word.pronunciation
  })</h3>
        <div>
            <h4 class="font-bold mb-2">Meaning</h4>
            <p class="hind-siliguri-medium">${word.meaning}</p>
        </div>
        <div>
            <h4 class="font-bold mb-2">Example</h4>
            <p class="text-gray-500 font-semibold">${word.sentence}</p>
        </div>
        <div>
            <h4 class="mb-1 font-bold hind-siliguri-medium">সমার্থক শব্দ গুলো</h4>
            <div class="flex flex-wrap justify-start gap-2">
            ${word.synonyms.map(
              (synonym) =>
                `<p class="bg-gray-200 px-2 py-1 rounded-sm">${synonym}</p>`
            )}
            </div>
        </div>
    </div>
    <div class="modal-action flex justify-start">
        <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn btn-primary">Complete Learning</button>
        </form>
    </div>
    `;
  modal.appendChild(details);
  modal.showModal();
};

const handleWordClick = (id) => {
  fetch(`https://openapi.programming-hero.com/api/word/${id}`)
    .then((res) => res.json())
    .then((data) => {
      displayDetails(data.data);
    });
};
