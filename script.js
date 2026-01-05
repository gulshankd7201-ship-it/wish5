function nextSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  window.scrollTo(0, 0);
}

// Toggle video orientation
function toggleOrientation(button) {
  const wrap = button.closest('.video-wrap');
  const video = wrap ? wrap.querySelector('video') : null;
  if (!video) return;
  video.classList.toggle('portrait');
  if (video.classList.contains('portrait')) {
    button.textContent = '🖥️ Landscape';
  } else {
    button.textContent = '📱 Portrait';
  }
}

// Dynamic text
const messages = [
  "You have a calm magic that’s hard to ignore 💫",
  "Your smile genuinely makes days better 🌸",
  "Some people are just naturally special 💖"
];
let index = 0;

function changeText() {
  index = (index + 1) % messages.length;
  document.getElementById("dynamicText").innerText = messages[index];
}

// Confetti
function confetti() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < 200; i++) {
    ctx.fillStyle = `hsl(${Math.random()*360},100%,70%)`;
    ctx.fillRect(Math.random()*canvas.width, Math.random()*canvas.height, 6, 6);
  }
}
