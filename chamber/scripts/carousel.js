const track = document.querySelector("#carouselTrack");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let members = [];
let currentIndex = 0;

// Detect how many cards to show
function cardsToShow() {
  return window.innerWidth < 768 ? 1 : 3;
}

// Fetch members
async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  members = data.members;
  renderCarousel();
}

// Render carousel
function renderCarousel() {
  track.innerHTML = "";

  const visibleCards = cardsToShow();

  for (let i = 0; i < visibleCards; i++) {
    const index = (currentIndex + i) % members.length;
    const member = members[index];

    const card = document.createElement("div");
    card.classList.add("carousel-card");

    card.innerHTML = `
      <div class="image-placeholder"></div>
      <h3>${member.name}</h3>
      <p>${member.description}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    track.appendChild(card);
  }
}

// Buttons
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % members.length;
  renderCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + members.length) % members.length;
  renderCarousel();
});

// Re-render on resize
window.addEventListener("resize", renderCarousel);

getMembers();
