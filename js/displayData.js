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

const displayLabel = (labels) => {
  document.getElementById("lebel-spiner").classList.add("hidden");
  const labelContainer = document.getElementById("label-container");
  labels.forEach((label) => {
    const newLabel = document.createElement("div");
    newLabel.innerHTML = `
      <button class="level-btn btn btn-sm btn-soft btn-primary border-blue-700 text-sm md:text-base">
        <i class="fa-solid fa-book-open"></i> Lession-${label.level_no}
      </button>
    `;
    newLabel.addEventListener("click", (e) =>
      handleLabelClick(label.level_no, e)
    );
    labelContainer.appendChild(newLabel);
  });
};

const displayWordCard = (words) => {
  document.getElementById("card-spinner").classList.add("hidden");
  const cardContainer = document.getElementById("card-container");
  if (words.length <= 0) {
    document.getElementById("length-error").classList.remove("hidden");
    return;
  }
  words.forEach((word) => {
    const newCard = document.createElement("div");
    newCard.innerHTML = `
    <div onclick="handleWordClick(${word.id})" id=${word.id} class="p-4 md:p-5 bg-white text-center space-y-3 rounded-md">
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
