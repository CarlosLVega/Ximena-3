const accessScreen = document.querySelector("#accessScreen");
const accessForm = document.querySelector("#accessForm");
const loveCode = document.querySelector("#loveCode");
const dynamicLine = document.querySelector("#dynamicLine");
const timeline = document.querySelector("#timeline");
const cakeStage = document.querySelector(".cake-stage");
const cakeButton = document.querySelector("#cakeButton");
const cakeHint = document.querySelector("#cakeHint");
const cakeMessage = document.querySelector("#cakeMessage");
const sparkLayer = document.querySelector("#sparkLayer");
const wishOverlay = document.querySelector("#wishOverlay");
const mimoButton = document.querySelector("#mimoButton");
const noteCloud = document.querySelector("#noteCloud");
const musicButton = document.querySelector("#musicButton");
const ambientCanvas = document.querySelector("#ambientCanvas");
const ctx = ambientCanvas.getContext("2d");

const dynamicPhrases = [
  "Para mi princesa",
  "El amor de mi vida",
  "La niña de mis ojos",
  "Mi consentida por siempre"
];

// Edita estos textos con recuerdos personales. 2004 es el inicio; 2005-2026 son sus 22 años cumplidos.
const timelineReasons = [
  { year: 2004, title: "El mundo recibió tu luz", reason: "Naciste tú y, aunque yo aún no lo sabía, la vida estaba preparando mi lugar favorito.", wish: "Que siempre recuerdes que tu existencia ya era un regalo desde el primer día." },
  { year: 2005, title: "Tu primera vuelta al sol", reason: "Un añito de ternura, de miradas nuevas y de una dulzura que apenas empezaba a florecer.", wish: "Que nunca se apague esa inocencia bonita que vive en tu sonrisa." },
  { year: 2006, title: "Dos años de magia", reason: "Cada paso tuyo iba escribiendo una historia que hoy miro con admiración y amor.", wish: "Que camines siempre hacia lugares donde te amen con cuidado." },
  { year: 2007, title: "Tres años de encanto", reason: "Tu risa empezaba a pintar la casa, la familia y el mundo con colores más suaves.", wish: "Que la alegría vuelva a encontrarte incluso en los días cansados." },
  { year: 2008, title: "Cuatro años de flores", reason: "Había en ti una forma de iluminarlo todo sin pedir permiso, como hacen las cosas hermosas.", wish: "Que la vida te regale jardines donde puedas crecer tranquila." },
  { year: 2009, title: "Cinco años de ternura", reason: "Tu corazón aprendía el tamaño de sus sueños, y qué suerte que fueran tan grandes.", wish: "Que nunca sientas que debes hacer pequeño lo que deseas." },
  { year: 2010, title: "Seis años de dulzura", reason: "Ya eras una personita capaz de dejar huella en cada lugar que tocabas.", wish: "Que cada etapa te devuelva el amor que tú das multiplicado." },
  { year: 2011, title: "Siete años de luz", reason: "Tu historia seguía creciendo con esa mezcla de fuerza y suavidad que te hace única.", wish: "Que siempre tengas motivos para mirar al cielo con esperanza." },
  { year: 2012, title: "Ocho años de brillo", reason: "Cada año agregaba algo precioso a tu forma de ser: más carácter, más gracia, más alma.", wish: "Que tu brillo no dependa nunca de la mirada de nadie." },
  { year: 2013, title: "Nueve años de sueños", reason: "El mundo se hacía más grande y tú también, con esa belleza que nace desde adentro.", wish: "Que tus sueños encuentren caminos bonitos y manos que te acompañen." },
  { year: 2014, title: "Diez años de encanto", reason: "Una década de Ximena: diez años de una vida que ya merecía ser celebrada en grande.", wish: "Que cada logro tuyo te recuerde lo capaz que eres." },
  { year: 2015, title: "Once años de corazón", reason: "Tu manera de querer, de sentir y de existir iba tomando una forma cada vez más hermosa.", wish: "Que tu corazón sea protegido con la misma ternura con la que ama." },
  { year: 2016, title: "Doce años de fuerza", reason: "Empezabas a descubrir más de ti, y aun en los cambios seguías siendo luz.", wish: "Que jamás pierdas la confianza en la mujer que estás construyendo." },
  { year: 2017, title: "Trece años de primavera", reason: "Tu vida entraba en nuevas estaciones, y en todas había algo de flor cuando estabas tú.", wish: "Que florezcas a tu ritmo, sin prisa y sin miedo." },
  { year: 2018, title: "Catorce años de belleza", reason: "La belleza en ti no era solo mirarte; era escucharte, conocerte, sentirte cerca.", wish: "Que siempre te veas con los ojos bonitos con los que yo te miro." },
  { year: 2019, title: "Quince años de princesa", reason: "Una edad de sueños grandes, de brillo especial y de una ternura imposible de olvidar.", wish: "Que la vida te trate como la reina dulce que eres." },
  { year: 2020, title: "Dieciséis años de valentía", reason: "Incluso cuando el mundo cambió, tu luz encontró formas de seguir encendida.", wish: "Que tu valentía siempre venga acompañada de descanso y amor." },
  { year: 2021, title: "Diecisiete años de alma bonita", reason: "Cada detalle tuyo iba demostrando que lo más lindo de ti vive en lo profundo.", wish: "Que nunca falten personas que valoren tu alma completa." },
  { year: 2022, title: "Dieciocho años de universo", reason: "Entraste a una nueva etapa con todo un cielo de posibilidades esperándote.", wish: "Que cada puerta que abras te acerque a una versión feliz de ti." },
  { year: 2023, title: "Diecinueve años de amor", reason: "La vida siguió afinando esa mezcla perfecta de dulzura, carácter y encanto que tienes.", wish: "Que el amor nunca te duela más de lo que te abraza." },
  { year: 2024, title: "Veinte años de magia adulta", reason: "Te convertiste en una mujer preciosa, con sueños, fuerza y una luz que se queda.", wish: "Que tus veinte siempre tengan recuerdos dignos de sonreír." },
  { year: 2025, title: "Veintiún años de mi fortuna", reason: "Tu presencia se volvió una de esas certezas que hacen que todo valga más la pena.", wish: "Que recibas paz, abundancia y amor en todas sus formas." },
  { year: 2026, title: "Veintidós años de mi vida entera", reason: "Hoy celebro tus 22 años y celebro también la suerte inmensa de poder admirarte y quererte.", wish: "Que este nuevo año te regale el universo entero, mi vida." }
];

const loveNotes = [
  "Eres mi todo",
  "Mi lugar seguro",
  "La dueña de mi corazón",
  "Mi princesa hermosa",
  "Mi casualidad favorita",
  "Mi paz en días largos",
  "Mi niña preciosa",
  "La sonrisa que más cuido",
  "Mi razón bonita",
  "Mi amor consentido",
  "Contigo todo se siente hogar",
  "Te amo más de lo que cabe aquí"
];

let phraseIndex = 0;
let cakeClicks = 0;
let audioContext;
let musicTimer;
let musicPlaying = false;
let particles = [];
let canvasWidth = 0;
let canvasHeight = 0;

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function unlockSurprise(event) {
  event.preventDefault();

  if (!loveCode.value.trim()) {
    loveCode.focus();
    loveCode.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(0)" }
      ],
      { duration: 280, easing: "ease-out" }
    );
    return;
  }

  accessScreen.classList.add("is-opening");
  document.body.classList.remove("locked");

  window.setTimeout(() => {
    accessScreen.classList.add("is-open");
  }, 760);
}

function rotateDynamicLine() {
  phraseIndex = (phraseIndex + 1) % dynamicPhrases.length;
  dynamicLine.animate(
    [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(10px)" }
    ],
    { duration: 220, easing: "ease-in", fill: "forwards" }
  ).onfinish = () => {
    dynamicLine.textContent = dynamicPhrases[phraseIndex];
    dynamicLine.animate(
      [
        { opacity: 0, transform: "translateY(-10px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 320, easing: "ease-out", fill: "forwards" }
    );
  };
}

function buildTimeline() {
  const fragment = document.createDocumentFragment();

  timelineReasons.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "timeline-card reveal-card";
    card.innerHTML = `
      <button class="timeline-content" type="button" aria-expanded="false">
        <p class="timeline-year">${item.year}</p>
        <h3>${item.title}</h3>
        <p>${item.reason}</p>
        <span class="timeline-wish"><span><em>${item.wish}</em></span></span>
      </button>
      <span class="year-node">${index === 0 ? "Nace" : index}</span>
    `;

    const button = card.querySelector(".timeline-content");
    button.addEventListener("click", () => {
      const isActive = card.classList.toggle("is-active");
      button.setAttribute("aria-expanded", String(isActive));
    });

    fragment.appendChild(card);
  });

  timeline.appendChild(fragment);
}

function setupRevealObserver() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  document.querySelectorAll(".reveal, .reveal-card").forEach(element => observer.observe(element));
}

function createSparks() {
  sparkLayer.innerHTML = "";

  for (let i = 0; i < 26; i += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.style.left = `${randomBetween(38, 62)}%`;
    spark.style.top = `${randomBetween(12, 42)}%`;
    spark.style.setProperty("--spark-x", `${randomBetween(-140, 140)}px`);
    spark.style.setProperty("--spark-y", `${randomBetween(-120, 70)}px`);
    spark.style.animationDelay = `${randomBetween(0, 120)}ms`;
    sparkLayer.appendChild(spark);
  }
}

function launchConfetti() {
  const colors = ["#ffc8d8", "#bd607e", "#fff4f7", "#c99a62", "#f1d8b9", "#eda2b7"];

  for (let i = 0; i < 130; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--confetti-drift", `${randomBetween(-120, 120)}px`);
    piece.style.setProperty("--fall-duration", `${randomBetween(2.8, 5.4)}s`);
    piece.style.animationDelay = `${randomBetween(0, 580)}ms`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 6500);
  }
}

function handleCakeClick() {
  cakeClicks += 1;

  if (cakeClicks === 1) {
    cakeStage.classList.add("wish-mode");
    cakeHint.textContent = "Cierra los ojos, mi vida...";
    cakeMessage.textContent = "Que este deseo llegue envuelto en flores, luz y todo mi amor.";
    createSparks();
    return;
  }

  cakeStage.classList.remove("wish-mode");
  cakeStage.classList.add("blown");
  cakeHint.textContent = "Deseo enviado al cielo";
  cakeMessage.textContent = "Soplé contigo en pensamiento. Lo bonito viene en camino.";
  wishOverlay.classList.add("show");
  launchConfetti();

  window.setTimeout(() => {
    wishOverlay.classList.remove("show");
  }, 4200);
}

function createLoveNote() {
  const note = document.createElement("span");
  const message = loveNotes[Math.floor(Math.random() * loveNotes.length)];
  note.className = "love-note";
  note.textContent = message;
  note.style.left = `${randomBetween(7, 68)}%`;
  note.style.bottom = `${randomBetween(16, 38)}%`;
  note.style.setProperty("--note-rotation", `${randomBetween(-7, 7)}deg`);
  noteCloud.appendChild(note);

  window.setTimeout(() => note.remove(), 5400);
}

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  ambientCanvas.width = Math.floor(canvasWidth * ratio);
  ambientCanvas.height = Math.floor(canvasHeight * ratio);
  ambientCanvas.style.width = `${canvasWidth}px`;
  ambientCanvas.style.height = `${canvasHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const count = window.matchMedia("(max-width: 560px)").matches ? 34 : 58;
  particles = Array.from({ length: count }, () => createParticle(true));
}

function createParticle(randomY = false) {
  const isSparkle = Math.random() > 0.68;
  return {
    x: randomBetween(0, canvasWidth),
    y: randomY ? randomBetween(0, canvasHeight) : randomBetween(-80, -20),
    size: isSparkle ? randomBetween(1.8, 3.6) : randomBetween(9, 20),
    speed: isSparkle ? randomBetween(0.22, 0.7) : randomBetween(0.45, 1.1),
    drift: randomBetween(-0.35, 0.35),
    rotation: randomBetween(0, Math.PI * 2),
    rotationSpeed: randomBetween(-0.018, 0.018),
    opacity: randomBetween(0.28, 0.82),
    isSparkle
  };
}

function drawPetal(particle) {
  ctx.save();
  ctx.translate(particle.x, particle.y);
  ctx.rotate(particle.rotation);
  ctx.globalAlpha = particle.opacity;

  if (particle.isSparkle) {
    ctx.fillStyle = "#c99a62";
    ctx.beginPath();
    ctx.moveTo(0, -particle.size * 2.2);
    ctx.lineTo(particle.size * 0.72, 0);
    ctx.lineTo(0, particle.size * 2.2);
    ctx.lineTo(-particle.size * 0.72, 0);
    ctx.closePath();
    ctx.fill();
  } else {
    const gradient = ctx.createLinearGradient(-particle.size, -particle.size, particle.size, particle.size);
    gradient.addColorStop(0, "#fff4f7");
    gradient.addColorStop(0.42, "#ffc8d8");
    gradient.addColorStop(1, "#d87896");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(0, 0, particle.size * 0.58, particle.size, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

function animateAmbient() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  particles.forEach(particle => {
    particle.y += particle.speed;
    particle.x += particle.drift + Math.sin(particle.y * 0.012) * 0.18;
    particle.rotation += particle.rotationSpeed;

    if (particle.y > canvasHeight + 50 || particle.x < -70 || particle.x > canvasWidth + 70) {
      Object.assign(particle, createParticle(false));
    }

    drawPetal(particle);
  });

  requestAnimationFrame(animateAmbient);
}

function playSoftMelody() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (musicPlaying) {
    clearInterval(musicTimer);
    musicPlaying = false;
    musicButton.classList.remove("is-playing");
    return;
  }

  const notes = [523.25, 659.25, 783.99, 659.25, 698.46, 880, 783.99, 659.25];
  let index = 0;
  musicPlaying = true;
  musicButton.classList.add("is-playing");

  function playNote() {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = notes[index % notes.length];
    gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.045, audioContext.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.58);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.62);
    index += 1;
  }

  playNote();
  musicTimer = window.setInterval(playNote, 760);
}

accessForm.addEventListener("submit", unlockSurprise);
cakeButton.addEventListener("click", handleCakeClick);
mimoButton.addEventListener("click", createLoveNote);
musicButton.addEventListener("click", playSoftMelody);
window.addEventListener("resize", resizeCanvas);

buildTimeline();
setupRevealObserver();
resizeCanvas();
animateAmbient();
window.setInterval(rotateDynamicLine, 2600);
