const track = document.querySelector(".track");
const btnNext = document.querySelector(".derecha");
const btnPrev = document.querySelector(".izquierda");

let position = 0;

function getVisibleItems() {
  return window.innerWidth <= 768 ? 1 : 3;
}

function moveCarousel(direction) {
  const items = document.querySelectorAll(".item");
  const totalItems = items.length;
  const visibleItems = getVisibleItems();

  const maxPosition = totalItems - visibleItems;

  position += direction;

  if (position > maxPosition) {
    position = maxPosition;
  }

  if (position < 0) {
    position = 0;
  }

  const itemWidth = items[0].offsetWidth;
  track.style.transform = `translateX(-${position * itemWidth}px)`;
}

btnNext.addEventListener("click", () => moveCarousel(1));
btnPrev.addEventListener("click", () => moveCarousel(-1));

window.addEventListener("resize", () => {
  position = 0;
  track.style.transform = `translateX(0px)`;
});
