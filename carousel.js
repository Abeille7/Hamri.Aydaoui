document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const images = document.querySelectorAll(".carousel-img");
  const dots = document.querySelectorAll(".dot");

  let index = 0;

  function moveSlide(newIndex) {
    index = newIndex;
    const translateX = -index * 100;
    track.style.transform = `translateX(${translateX}%)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const newIndex = parseInt(dot.getAttribute("data-index"));
      moveSlide(newIndex);
    });
  });
});
