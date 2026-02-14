const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.querySelector(".card");

const phrases = [
  "Are you sure?",
  "Really sure??",
  "Think again! 🥺",
  "Don't do this to me...",
  "I'm gonna cry! 😭",
  "You're breaking my heart!",
];

let phraseIndex = 0;
let yesScale = 1;

// Function to move the button safely within the window
function moveButton() {
  const noRect = noBtn.getBoundingClientRect();
  const padding = 50; // Keeps button 50px away from any edge

  // Calculate safe random coordinates
  const maxX = window.innerWidth - noRect.width - padding;
  const maxY = window.innerHeight - noRect.height - padding;

  const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
  const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

  noBtn.style.position = "fixed";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  // Change Text
  noBtn.innerText = phrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrases.length;

  // Make Yes button bigger
  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;
}

// Trigger move on both hover (desktop) and touch (mobile)
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevents clicking on mobile
  moveButton();
});

// SUCCESS ACTION
yesBtn.addEventListener("click", () => {
  card.innerHTML = `
        <img src="val.jpeg" style="width:200px">
        <h1 class="title">Yay! It's a date! ❤️</h1>
        <p>I knew you couldn't say no!</p>
    `;
  noBtn.style.display = "none";

  // Burst of hearts when she says yes
  for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 100);
  }
});

// Background hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart-bg");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 400);
