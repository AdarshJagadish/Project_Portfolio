// Mobile navigation toggle with hamburger animation
function toggleMobileNav() {
  const nav = document.getElementById("mobileNav");
  const burger = document.querySelector(".hamburger");

  if (nav.style.display === "flex") {
    nav.style.display = "none";
    burger.classList.remove("open");
  } else {
    nav.style.display = "flex";
    burger.classList.add("open");
  }
}

function closeMobileNav() {
  document.getElementById("mobileNav").style.display = "none";
  document.querySelector(".hamburger").classList.remove("open");
}

// Intersection Observer for fade-in animation on scroll
const sections = document.querySelectorAll('.section');
const observerOptions = {
  threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});

/////////////////////////
// Background animation: animated gradient with slow color shifts

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width, height;

let gradientPositions = [
  { x: 0, y: 0, r: 250, colorStop1: '#00ffcc', colorStop2: '#005f4c' },
  { x: 0, y: 0, r: 200, colorStop1: '#00ffcc', colorStop2: '#002b17' },
  { x: 0, y: 0, r: 300, colorStop1: '#00ffcc', colorStop2: '#001e0e' },
];

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  gradientPositions[0].x = width * 0.1;
  gradientPositions[0].y = height * 0.15;

  gradientPositions[1].x = width * 0.8;
  gradientPositions[1].y = height * 0.3;

  gradientPositions[2].x = width * 0.5;
  gradientPositions[2].y = height * 0.75;
}

window.addEventListener('resize', resize);
resize();

// Animate colors slightly over time with sine wave

let time = 0;

function animate() {
  time += 0.005;
  ctx.clearRect(0, 0, width, height);

  gradientPositions.forEach((pos, i) => {
    let alpha = 0.15 + 0.05 * Math.sin(time + i * Math.PI * 1.5);

    let gradient = ctx.createRadialGradient(pos.x, pos.y, pos.r * 0.2, pos.x, pos.y, pos.r);
    gradient.addColorStop(0, `rgba(0, 255, 204, ${alpha.toFixed(2)})`);
    gradient.addColorStop(1, `rgba(0, 95, 76, 0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, pos.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();