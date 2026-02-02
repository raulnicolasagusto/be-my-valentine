// ============================
// LEER VARIABLES DESDE URL
// ============================
const params = new URLSearchParams(window.location.search);

const nombreParam = params.get("nombre");
const aliasParam = params.get("alias");

// Valores finales
const nombreFinal = nombreParam && nombreParam.trim()
  ? nombreParam.trim()
  : "Hermosa";

const aliasFinal = aliasParam && aliasParam.trim()
  ? aliasParam.trim()
  : "";

// ============================
// INYECTAR NOMBRE EN TÍTULO
// ============================
const nombreEl = document.getElementById("nombre");
if (nombreEl) {
  nombreEl.innerText = nombreFinal;
}

// ============================
// INYECTAR ALIAS EN "SAN VALENTÍN"
// ============================
const valentinAliasEl = document.getElementById("valentinAlias");
if (valentinAliasEl && aliasFinal) {
  valentinAliasEl.innerText = ` ${aliasFinal}`;
}

// ============================
// FOOTER
// ============================
const footerText = document.getElementById("footerText");
if (footerText && aliasFinal) {
  footerText.innerText = `❤️ Hecho con amor para mi ${aliasFinal} ❤️`;
}

// ============================
// BOTÓN NO QUE HUYE
// ============================
const noBtn = document.getElementById("noBtn");

function moveNoButton() {
  const padding = 80;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Position the "No" button next to the "Yes" button initially
function positionNoButtonNextToYes() {
  const yesBtn = document.getElementById("yesBtn");
  if (yesBtn && noBtn) {
    const yesRect = yesBtn.getBoundingClientRect();
    const containerRect = document.querySelector('.container').getBoundingClientRect();
    
    // Calculate position to the right of the "Yes" button
    const yesRightEdge = yesRect.right - containerRect.left;
    const desiredLeft = yesRightEdge + 20; // 20px gap between buttons
    
    // Center vertically with the "Yes" button
    const verticalCenter = yesRect.top - containerRect.top + (yesRect.height / 2) - (noBtn.offsetHeight / 2);
    
    noBtn.style.left = `${desiredLeft}px`;
    noBtn.style.top = `${verticalCenter}px`;
  }
}

// Position the "No" button initially when the page loads
document.addEventListener('DOMContentLoaded', positionNoButtonNextToYes);

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// ============================
// FONDO ANIMADO
// ============================
const icons = ["❤️", "🌸", "🎁", "💐", "🧸"];
const bg = document.querySelector(".floating-background");

function createFloatingIcon() {
  const span = document.createElement("span");
  span.innerText = icons[Math.floor(Math.random() * icons.length)];

  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 10 + Math.random() * 10 + "s";

  bg.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 20000);
}

setInterval(createFloatingIcon, 400);


// ============================
// MODAL + GIF ALEATORIO + LLUVIA
// ============================

// Referencias
const yesBtn = document.getElementById("yesBtn");
const modal = document.getElementById("loveModal");
const closeModal = document.getElementById("closeModal");
const gifImg = document.getElementById("loveGif");
const heartRain = document.getElementById("heartRain");

// Lista de GIFs
const gifs = [
  "assets/the-office.gif",
  "assets/dogs.gif",
  "assets/love.gif"
];

// Al presionar "Sí, acepto"
if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    // GIF aleatorio
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    gifImg.src = randomGif;

    // Mostrar modal
    modal.classList.remove("hidden");

    // Lluvia de corazones
    startHeartRain();
  });
}

// Cerrar modal
if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

// ============================
// LLUVIA DE CORAZONES INTENSA
// ============================
function startHeartRain() {
  const waves = 10;          // cantidad de oleadas
  const heartsPerWave = 65; // corazones por oleada
  const waveDelay = 350;    // tiempo entre oleadas

  for (let w = 0; w < waves; w++) {
    setTimeout(() => {
      for (let i = 0; i < heartsPerWave; i++) {
        setTimeout(createHeart, i * 30);
      }
    }, w * waveDelay);
  }
}

function createHeart() {
  const heart = document.createElement("span");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 14 + Math.random() * 26 + "px";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  heart.style.opacity = 0.9;

  heartRain.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}


function createHeart() {
  const heart = document.createElement("span");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 14 + Math.random() * 20 + "px";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";

  heartRain.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}
