document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("formulario");
  const resultado = document.getElementById("resultado");
  const generatedLinkSpan = document.getElementById("generated-link");
  const copyBtn = document.getElementById("copy-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const alias = document.getElementById("alias").value;

    if (!nombre) return;

    let url = `${window.location.origin}/?nombre=${encodeURIComponent(nombre)}`;

    if (alias) {
      url += `&alias=${encodeURIComponent(alias)}`;
    }

    // Display the result container and populate the link
    resultado.classList.remove("hidden");
    generatedLinkSpan.textContent = url;
    generatedLinkSpan.href = url; // Set the href attribute for the anchor tag
  });

  // Copy button functionality
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const linkText = generatedLinkSpan.textContent;
      
      if (linkText) {
        navigator.clipboard.writeText(linkText)
          .then(() => {
            // Visual feedback
            const originalText = copyBtn.textContent;
            copyBtn.textContent = "✓ Copiado!";
            
            setTimeout(() => {
              copyBtn.textContent = originalText;
            }, 2000);
          })
          .catch(err => {
            console.error('Failed to copy: ', err);
          });
      }
    });
  }
});

// ============================
// FONDO ANIMADO
// ============================
const icons = ["❤️", "🌸", "🎁", "💐", "🧸"];
const bg = document.querySelector(".floating-background");

function crearIconoFlotante() {
  const span = document.createElement("span");
  span.innerText = icons[Math.floor(Math.random() * icons.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 10 + Math.random() * 10 + "s";
  bg.appendChild(span);

  setTimeout(() => span.remove(), 20000);
}

setInterval(crearIconoFlotante, 500);
