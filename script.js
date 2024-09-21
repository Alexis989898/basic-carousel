const carouselSlides = document.querySelector("#carousel-slides");
const carouselLeftBtn = document.getElementById("carousel-left-btn");
const carouselRightBtn = document.getElementById("carousel-right-btn");

const navDots = document.querySelectorAll(".nav-dot");
const slideImgs = document.querySelectorAll(".carousel-img-wrapper");

let currentSlide = 0;

function updateSlide(index) {
  carouselSlides.style.left = index * -100 + "%";

  // Update active dot
  navDots.forEach(dot => dot.textContent = "⚪");
  navDots[index].textContent = "⚫";
}

carouselRightBtn.addEventListener("click", () => {
  if (currentSlide < slideImgs.length - 1) {
    currentSlide += 1;
    updateSlide(currentSlide);
  } else {
    currentSlide = 0; // Loop back to the first slide
  }
  updateSlide(currentSlide);
});

carouselLeftBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide -= 1;
    updateSlide(currentSlide);
  } else {
    currentSlide = slideImgs.length - 1; // Loop back to the last slide
  }
  updateSlide(currentSlide);
});

navDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlide(currentSlide);
  });
});

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideImgs.length;
  updateSlide(currentSlide);
}

setInterval(nextSlide, 5000);