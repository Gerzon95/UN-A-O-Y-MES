
const sobre = document.getElementById("sobre");
const abrir = document.getElementById("abrir");
const carta = document.getElementById("carta");
const botonSorpresa = document.getElementById("botonSorpresa");
const sorpresa = document.getElementById("sorpresa");
const lluvia = document.getElementById("lluvia");

let cartaAbierta = false;

function abrirCarta() {
  if (cartaAbierta) return;

  cartaAbierta = true;
  sobre.classList.add("abierto");
  abrir.textContent = "MI CARTA PARA TI ❤️";

  setTimeout(function () {
    carta.classList.add("visible");
    carta.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 500);

  crearCorazones(25);
}

sobre.addEventListener("click", abrirCarta);
abrir.addEventListener("click", abrirCarta);

sobre.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter" || evento.key === " ") {
    evento.preventDefault();
    abrirCarta();
  }
});

botonSorpresa.addEventListener("click", function () {
  sorpresa.classList.toggle("visible");

  if (sorpresa.classList.contains("visible")) {
    botonSorpresa.textContent = "¡TE AMO MUCHÍSIMO! 💖";
    crearCorazones(40);
  } else {
    botonSorpresa.textContent = "ABRE TU SORPRESA 🎁";
  }
});

function crearCorazones(cantidad) {
  const emojis = ["❤️", "💕", "💖", "💗", "✨", "💘"];

  for (let i = 0; i < cantidad; i++) {
    const elemento = document.createElement("span");

    elemento.className = "flotante";
    elemento.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    elemento.style.left = Math.random() * 100 + "vw";
    elemento.style.fontSize =
      (16 + Math.random() * 22) + "px";
    elemento.style.animationDuration =
      (3 + Math.random() * 5) + "s";

    lluvia.appendChild(elemento);

    elemento.addEventListener("animationend", function () {
      elemento.remove();
    });
  }
}

// Corazones flotantes durante toda la experiencia
setInterval(function () {
  crearCorazones(2);
}, 1000);
