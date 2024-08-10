const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size to full window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create particles
const particles = [];
const numParticles = 100;

function createParticles() {
  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 5 + 1,
      speedX: Math.random() * 3 - 1.5,
      speedY: Math.random() * 3 - 1.5
    });
  }
}

// Animation loop
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 165, 0, 0.7)';
    ctx.fill();

    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x > canvas.width || particle.x < 0) particle.speedX *= -1;
    if (particle.y > canvas.height || particle.y < 0) particle.speedY *= -1;
  });

  requestAnimationFrame(animateParticles);
}

document.addEventListener('DOMContentLoaded', function() {
  createParticles();
  animateParticles();
});
