let isCandleBlown = false;

function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    starsContainer.innerHTML = '';
    const count = 40;

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 3 + 2;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);

        starsContainer.appendChild(star);
    }
}

function blowOutCandle() {
    if (isCandleBlown) return;
    isCandleBlown = true;
    
    // Matikan Api Lilin & Munculkan Asap
    const flame = document.getElementById('flame');
    const smoke = document.getElementById('smoke');
    if (flame) flame.classList.add('out');
    if (smoke) smoke.classList.add('active');

    // Ubah Teks Petunjuk
    const instruction = document.getElementById('instruction');
    if (instruction) {
        instruction.innerHTML = "✨ <b>Tiupanmu membawa sejuta doa baik!</b> ✨";
        instruction.style.color = "#ffb6c1";
    }

    // Pesta Konfeti
    try {
        triggerConfettiBurst();
    } catch (err) {
        console.log("Confetti Error:", err);
    }

    // Tampilkan Section Doa
    setTimeout(() => {
        const wishesSection = document.getElementById('wishesSection');
        if (wishesSection) {
            wishesSection.classList.remove('hidden');
            wishesSection.style.display = 'block';
            wishesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 500);
}

function triggerConfettiBurst(event) {
    if (event) event.stopPropagation();

    if (typeof confetti === 'function') {
        confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.6 }
        });

        setTimeout(() => {
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });
        }, 200);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createStars();
});
    // 2. Ubah Teks Petunjuk
    const instruction = document.getElementById('instruction');
    if (instruction) {
        instruction.innerText = "✨ Tiupanmu membawa sejuta doa baik! ✨";
        instruction.style.color = "#ffb6c1";
        instruction.style.fontWeight = "bold";
    }

    // 3. Pesta Konfeti (Di-wrap try-catch agar jika internet HP lambat, api TETAP mati)
    try {
        triggerConfettiBurst();
    } catch (err) {
        console.log("Confetti tidak dapat dimuat:", err);
    }

    // 4. Tampilkan Kartu Doa
    setTimeout(() => {
        const wishesSection = document.getElementById('wishesSection');
        if (wishesSection) {
            wishesSection.classList.remove('hidden');
            wishesSection.style.display = 'block';
            wishesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 400);
}

function triggerConfettiBurst() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        setTimeout(() => {
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });
        }, 200);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createStars();
});

