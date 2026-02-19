import { guides } from "../data/guides.mjs";

const grid = document.getElementById("grid-problemas");

guides.forEach(guide => {
  const card = document.createElement("div");
  card.classList.add("problema-card");

  card.innerHTML = `
    <img src="${guide.image}" alt="${guide.title}">
    <h4>${guide.title}</h4>
  `;

  card.addEventListener("click", () => openModal(guide));
  grid.appendChild(card);
});

function openModal(guide) {
  document.getElementById("modal-img").src = guide.image;
  document.getElementById("modal-title").textContent = guide.title;
  document.getElementById("modal-description").textContent = guide.description;

  const stepsList = document.getElementById("modal-steps");
  stepsList.innerHTML = "";

  guide.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsList.appendChild(li);
  });

  document.getElementById("modal").style.display = "flex";
}

document.querySelector(".cerrar").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    document.getElementById("modal").style.display = "none";
  }
});
