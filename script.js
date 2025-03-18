const heart = document.querySelector('.heart');
const particlesContainer = document.querySelector('.particles');

// Tạo các hạt pháo hoa
function createParticles() {
    particlesContainer.innerHTML = '';
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 8 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particle.style.left = '50%';
        particle.style.top = '50%';

        particlesContainer.appendChild(particle);
    }
}

// Hiệu ứng pháo hoa
function explodeHeart() {
    createParticles();
    const particles = document.querySelectorAll('.particle');
    heart.style.opacity = '0';

    particles.forEach((particle) => {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 120 + 80;
        const duration = Math.random() * 0.5 + 0.8;

        const targetX = Math.cos(angle) * distance;
        const targetY = Math.sin(angle) * distance;

        particle.style.transition = `transform ${duration}s ease-out, opacity ${duration}s ease-out`;
        particle.style.transform = `translate(${targetX}px, ${targetY}px)`;
        particle.style.opacity = '1';
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        setTimeout(() => {
            particle.style.opacity = '0';
        }, duration * 1000);
    });

    setTimeout(() => {
        heart.style.transform = 'rotate(-45deg) scale(0.1)';
        heart.style.opacity = '1';
        heart.style.transition = 'transform 0.8s, opacity 0.8s';

        setTimeout(() => {
            heart.style.transform = 'rotate(-45deg) scale(1)';
        }, 100);
    }, 2000);
}

// Khởi tạo
createParticles();
heart.style.transition = 'transform 0.8s, opacity 0.8s';
