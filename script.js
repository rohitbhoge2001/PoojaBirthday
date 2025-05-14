const heartOverlay = document.getElementById("heart-overlay");
const intro = document.getElementById("intro");
const slideshow = document.getElementById("slideshow");
const finalMessage = document.getElementById("final-message");
const slideImg = document.getElementById("slide-img");
const audio = document.getElementById("birthday-audio");

const images = Array.from({ length: 15 }, (_, i) => assets/mem${i + 1}.jpg);
let currentIndex = 0;

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heartOverlay.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

function startHearts() {
  setInterval(createHeart, 300);
}

function startCelebration() {
  intro.classList.add("hidden");
  slideshow.classList.remove("hidden");
  audio.play();
  startHearts();
  showSlideshow();
}

function showSlideshow() {
  if (currentIndex < images.length) {
    slideImg.src = images[currentIndex];
    currentIndex++;
    setTimeout(showSlideshow, 2500);
  } else {
    slideshow.classList.add("hidden");
    finalMessage.classList.remove("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 20; i++) setTimeout(createHeart, i * 300);
});
