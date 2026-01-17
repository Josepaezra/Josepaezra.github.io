const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const btn = document.getElementById('btnSurprise');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const types = ['🎈', '🌸', '🤖', '⭐', '🌷', '🎮'];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 100;
        this.size = Math.random() * 20 + 20;
        this.speedY = Math.random() * 3 + 2;
        this.char = types[Math.floor(Math.random() * types.length)];
        this.angle = Math.random() * 360;
        this.spin = Math.random() * 2 - 1;
    }

    update() {
        this.y -= this.speedY;
        this.angle += this.spin;
        if (this.y < -50) {
            this.y = canvas.height + 100;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.font = `${this.size}px Arial`;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.fillText(this.char, 0, 0);
        ctx.restore();
    }
}

function init() {
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Simular luces de fondo
    if(Math.random() > 0.9) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.fillRect(0,0, canvas.width, canvas.height);
    }

    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

btn.addEventListener('click', () => {
    init();
    animate();
    btn.innerText = "¡LEVEL UP!";
    btn.style.background = "#00f2ff";
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});