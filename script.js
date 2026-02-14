const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Page Switching Logic
function nextPage(pageNumber) {
  document
    .querySelectorAll(".page")
    .forEach((page) => page.classList.remove("active"));
  document.getElementById(`page${pageNumber}`).classList.add("active");
}

// Escaping No Button Logic
let yesScale = 1;
function moveButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth - 50;
  const maxY = window.innerHeight - noBtn.offsetHeight - 50;

  noBtn.style.position = "fixed";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";

  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});

// Final Success Action
yesBtn.addEventListener("click", () => {
  nextPage(3);
  for (let i = 0; i < 50; i++) {
    setTimeout(createHeart, i * 50);
  }
});

// Floating Hearts background
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart-bg");
  heart.innerHTML = ["❤️", "💖", "✨", "🌹"][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 500);
