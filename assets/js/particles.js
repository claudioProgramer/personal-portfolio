/* ========================= */
/* PARTICLES BACKGROUND */
/* ========================= */

const particlesContainer = document.querySelector(".particles");


// Compensa la altura real del glifo (~0.65em) para que el 0/1
// ocupe visualmente el mismo espacio que ocupaba el círculo.
const GLYPH_SCALE = 1.5;


function createParticle() {

    const particle = document.createElement("div");

    particle.classList.add("particle");


    // Carácter binario aleatorio: 0 o 1
    particle.textContent = Math.random() < 0.5 ? "0" : "1";


    const size = Math.random() * 8 + 2;

    // El font-size se deriva del mismo tamaño de la partícula
    // para conservar la variación (pequeña / mediana / grande).
    particle.style.fontSize = `${size * GLYPH_SCALE}px`;

    particle.style.width = `${size}px`;

    particle.style.height = `${size}px`;


    particle.style.left = `${Math.random() * 100}%`;


    const duration = Math.random() * 10 + 10;

    particle.style.animationDuration = `${duration}s`;


    particle.style.opacity = Math.random();


    particlesContainer.appendChild(particle);


    setTimeout(() => {

        particle.remove();

    }, duration * 1000);
}


setInterval(createParticle, 300);
